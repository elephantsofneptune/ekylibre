# == License
# Ekylibre - Simple agricultural ERP
# Copyright (C) 2008-2013 David Joulin, Brice Texier
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.
#

module Backend
  class CultivableZonesController < Backend::BaseController
    manage_restfully(t3e: { name: :name })

    unroll

    # params:
    #   :q Text search
    #   :owner_id
    #   :farmer_id
    def self.cultivable_zones_conditions
      code = ''
      code = search_conditions(cultivable_zones: [:name, :work_number]) + " ||= []\n"
      code << "  if params[:farmer_id].to_i > 0\n"
      code << "    c[0] << \" AND \#{CultivableZone.table_name}.farmer_id = ?\"\n"
      code << "    c << params[:farmer_id].to_i\n"
      code << "  end\n"
      code << "  if params[:owner_id].to_i > 0\n"
      code << "    c[0] << \" AND \#{CultivableZone.table_name}.owner_id = ?\"\n"
      code << "    c << params[:owner_id].to_i\n"
      code << "  end\n"
      code << "c\n"
      code.c
    end

    list(conditions: cultivable_zones_conditions) do |t|
      t.action :edit
      t.action :destroy, if: :destroyable?
      t.column :name, url: true
      t.column :work_number
      t.column :human_shape_area, datatype: :measure, on_select: :sum
      # FIXME: Remove use of "_name" for nomen columns
      t.column :production_system_name
      t.column :farmer, url: true
      t.column :owner, url: true
      # t.column :unit
    end

    # content production on current cultivable land parcel
    list(:productions, model: :activity_productions, conditions: { cultivable_zone_id: 'params[:id]'.c }, order: 'started_on DESC') do |t|
      t.column :name, url: true
      t.column :activity, url: true
      t.column :support, url: true
      t.column :usage
      t.column :grains_yield, datatype: :measure
      t.column :started_on
      t.column :stopped_on
    end
  end
end
