module Backend
  module LandParcelsHelper
    def land_parcels_map(options = {})
      options[:collection] ||= LandParcel.all
      main_serie = []
      options[:collection].each do |p|
        next unless p.shape
        popup_content = []

        # for all land_parcel
        popup_content << {
          label: Nomen::Indicator[:net_surface_area].human_name,
          value: p.net_surface_area.to_d(:hectare).round(2).l
        }

        # for indicators in list
        indicators = %i[soil_nature potential_hydrogen available_water_capacity_per_area soil_depth organic_matter_concentration]
        indicators.each do |indicator|
          next unless p.send(indicator).present? && (p.send(indicator).to_d > 0.0)
          popup_content << {
            label: Nomen::Indicator[indicator].human_name,
            value: p.send(indicator).l
          }
        end
        popup_content << render('popup', land_parcel: p)

        main_serie << {
          name: p.name,
          shape: p.shape,
          potential_hydrogen: p.potential_hydrogen.to_d,
          organic_matter_concentration: p.organic_matter_concentration.to_d,
          available_water_capacity_per_area: p.available_water_capacity_per_area.to_d,
          soil_nature: (Nomen::SoilNature[p.soil_nature] ? Nomen::SoilNature[p.soil_nature].human_name : :unknown.tl),
          popup: {
            header: true,
            content: popup_content
          }
        }
      end

      if main_serie.any?
        html = collection_map(main_serie, main: true) do |v|
          v.bubbles :available_water_capacity_per_area, :main, label: Nomen::Indicator[:available_water_capacity_per_area].human_name
          v.choropleth :organic_matter_concentration, :main, hidden: true, label: Nomen::Indicator[:organic_matter_concentration].human_name
          v.choropleth :potential_hydrogen, :main, hidden: true, label: Nomen::Indicator[:potential_hydrogen].human_name
          v.categories :soil_nature, :main
        end

        if options[:janus]
          options[:janus].face :map do
            html
          end
        else
          return html
        end
      end
    end
  end
end
