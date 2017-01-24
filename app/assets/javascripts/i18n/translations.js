I18n.translations || (I18n.translations = {});
I18n.translations["arb"] = I18n.extend((I18n.translations["arb"] || {}), {"date":{"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"abbr_month_names":["","jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"formats":{"default":"%m/%d/%Y","legal":"%d %B %Y","long":"%B %d, %Y","month":"%B %Y","month_letter":"%d %B %Y","short":"%b %d","short_month":"%d/%Y"},"month_names":["","january","february","march","april","may","june","july","august","september","october","november","december"],"order":["month","day","year"]},"front-end":{"leaflet":{"draw":{"handlers":{"circle":{"tooltip":{"start":"انقر واسحب لرسم دائرة."}},"marker":{"tooltip":{"start":"انقر الخريطة لوضع علامة."}},"polygon":{"tooltip":{"cont":"انقر لمتابعة رسم الشكل.","end":"انقر النقطة الأولى لإغلاق هذا الشكل.","start":"انقر لبدء رسم الشكل."}},"polyline":{"error":"\u003cstrong\u003eخطأ:\u003c/strong\u003e حواف الشكل لا يمكن أن تعبر!","tooltip":{"cont":"انقر على مواصلة خط الرسم.","end":"انقر النقطة الأخيرة لإنهاء الخط.","start":"انقر لبدء رسم الخط."}},"rectangle":{"tooltip":{"start":"انقر واسحب لرسم مستطيل."}},"simpleshape":{"tooltip":{"end":"الماوس الإصدار لإنهاء الرسم."}}},"toolbar":{"actions":{"text":"إلغاء","title":"إلغاء الرسم"},"buttons":{"circle":"أرسم دائرة","marker":"رسم علامة","polygon":"رسم مضلع","polyline":"رسم شكل متعدد الخطوط","rectangle":"رسم مستطيل"},"undo":{"text":"حذف النقطة الأخيرة","title":"حذف النقطة الأخيرة رسمها"}}},"edit":{"handlers":{"edit":{"tooltip":{"subtext":"انقر فوق إلغاء الأمر للتراجع عن التغييرات.","text":"مقابض السحب، أو علامة لتحرير الميزة."}},"remove":{"tooltip":{"text":"انقر على ميزة لإزالة"}}},"toolbar":{"actions":{"cancel":{"text":"إلغاء","title":"إلغاء التحرير، ويتجاهل كل التغييرات."},"save":{"text":"حفظ","title":"حفظ التغيرات."}},"buttons":{"edit":"تحرير طبقات.","editDisabled":"عدم وجود طبقات لتحرير.","remove":"حذف طبقات.","removeDisabled":"لا طبقات حذف."}}},"fullscreenTitle":"تكبير الشاشة","importerButtonTitle":"استيراد","zoomInTitle":"تكبير","zoomOutTitle":"تصغير"}},"time":{"am":"صباحا","formats":{"compact":"٪ م /٪ د /٪ Y٪ H:٪ M","default":"%b. %d, %Y at %H:%M:%S","devise":{"mailer":{"invitation_instructions":{"accept_until_format":"٪ B٪ د٪ Y٪ I:٪ M٪ ع"}}},"long":"%B %d, %Y %H:%M","short":"%d %b %H:%M","time":"%H:%M"},"pm":"مساءا"}});
I18n.translations["cmn"] = I18n.extend((I18n.translations["cmn"] || {}), {"date":{"abbr_day_names":["周日","周一","周二","周三","周四","周五","周六"],"abbr_month_names":["","1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"day_names":["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],"formats":{"default":"%Y-%m-%d","legal":"%d %B %Y","long":"%Y年%b%d日","month":"%B %Y","month_letter":"%d %B %Y","short":"%b%d日","short_month":"%m-%d"},"month_names":["","一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],"order":["year","month","day"]},"front-end":{"leaflet":{"draw":{"handlers":{"circle":{"tooltip":{"start":"单击并拖动绘制圆。"}},"marker":{"tooltip":{"start":"点击地图放置标记。"}},"polygon":{"tooltip":{"cont":"点击继续画形状。","end":"点击第一点，收这个形状。","start":"点击开始画的形状。"}},"polyline":{"error":"\u003cstrong\u003e错误：\u003c/strong\u003e形状边缘不能跨越！","tooltip":{"cont":"点击继续画线。","end":"点击最后一点到终点线。","start":"点击开始画线。"}},"rectangle":{"tooltip":{"start":"单击并拖动绘制矩形。"}},"simpleshape":{"tooltip":{"end":"释放鼠标完成绘制。"}}},"toolbar":{"actions":{"text":"取消","title":"取消绘图"},"buttons":{"circle":"画一个圆","marker":"画一个标记","polygon":"绘制多边形","polyline":"绘制折线","rectangle":"画一个矩形"},"undo":{"text":"删除最后一个点","title":"删除最后绘制点"}}},"edit":{"handlers":{"edit":{"tooltip":{"subtext":"单击取消撤消更改。","text":"拖动手柄，或标记编辑功能。"}},"remove":{"tooltip":{"text":"点击一个功能删除"}}},"toolbar":{"actions":{"cancel":{"text":"取消","title":"取消编辑，放弃所有更改。"},"save":{"text":"保存","title":"保存更改。"}},"buttons":{"edit":"编辑图层。","editDisabled":"没有图层编辑。","remove":"删除图层。","removeDisabled":"没有图层删除。"}}},"fullscreenTitle":"全屏","importerButtonTitle":"进口","zoomInTitle":"放大","zoomOutTitle":"缩小"}},"time":{"am":"上午","formats":{"compact":"％M /％D /％Y％H：％M","default":"%Y年%b%d日 %A %H:%M:%S %Z","devise":{"mailer":{"invitation_instructions":{"accept_until_format":"％A％D，％Y％I：％M％P"}}},"long":"%Y年%b%d日 %H:%M","short":"%b%d日 %H:%M","time":"%H:%M"},"pm":"下午"}});
I18n.translations["deu"] = I18n.extend((I18n.translations["deu"] || {}), {"date":{"abbr_day_names":["So","Mo","Di","Mi","Do","Fr","Sa"],"abbr_month_names":["","Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],"day_names":["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],"formats":{"default":"%d.%m.%Y","legal":"% D% B% Y","long":"%e. %B %Y","month":"%DURCH","month_letter":"% D% B% Y","short":"%e. %b","short_month":"%m.%Y"},"month_names":["","Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],"order":["day","month","year"]},"front-end":{"leaflet":{"draw":{"handlers":{"circle":{"tooltip":{"start":"Klicken und Ziehen Kreis zu zeichnen."}},"marker":{"tooltip":{"start":"Klicken Sie Markierung auf der Karte zu platzieren."}},"polygon":{"tooltip":{"cont":"Klicken Sie auf Weiter Form zeichnen.","end":"Klicken Sie auf erste Punkt dieser Form zu schließen.","start":"Klicken Sie zum Starten der Formzeichnung."}},"polyline":{"error":"\u003cstrong\u003eFehler:\u003c/strong\u003e Form Kanten können nicht kreuzen!","tooltip":{"cont":"Klicken Sie auf Zeichnung Linie fortzusetzen.","end":"Klicken Sie auf den letzten Punkt-Linie zu beenden.","start":"Klicken Sie zeichnen Linie zu starten."}},"rectangle":{"tooltip":{"start":"Klicken und ziehen Rechteck zu zeichnen."}},"simpleshape":{"tooltip":{"end":"Lassen Sie die Maus zu beenden Zeichnung."}}},"toolbar":{"actions":{"text":"Stornieren","title":"Abbrechen Zeichnung"},"buttons":{"circle":"Zeichnen Sie einen Kreis","marker":"Zeichnen Sie einen Marker","polygon":"Zeichnen Sie ein Polygon","polyline":"Zeichnen Sie eine Polylinie","rectangle":"Zeichnen Sie ein Rechteck"},"undo":{"text":"Löschen letzte Punkt","title":"Löschen letzte Punkt gezogen"}}},"edit":{"handlers":{"edit":{"tooltip":{"subtext":"Klicken Sie auf Abbrechen Änderungen rückgängig zu machen.","text":"Ziehen Griffe oder Marker-Funktion zu bearbeiten."}},"remove":{"tooltip":{"text":"Klicken Sie auf eine Funktion zu entfernen"}}},"toolbar":{"actions":{"cancel":{"text":"Stornieren","title":"Abbrechen Bearbeitung, werden alle Änderungen verworfen."},"save":{"text":"Sparen","title":"Änderungen speichern."}},"buttons":{"edit":"Bearbeiten Schichten.","editDisabled":"Keine Ebenen zu bearbeiten.","remove":"Löschen Schichten.","removeDisabled":"Keine Schichten zu löschen."}}},"fullscreenTitle":"Vollbild","importerButtonTitle":"Einführen","zoomInTitle":"Hineinzoomen","zoomOutTitle":"Rauszoomen"}},"time":{"am":"vormittags","formats":{"compact":"% M /% d /% Y% H:% M","default":"%A, %d. %B %Y, %H:%M Uhr","devise":{"mailer":{"invitation_instructions":{"accept_until_format":"% B% d,% Y% H:% M% p"}}},"long":"%A, %d. %B %Y, %H:%M Uhr","short":"%d. %B, %H:%M Uhr","time":"%H:%M"},"pm":"nachmittags"}});
I18n.translations["eng"] = I18n.extend((I18n.translations["eng"] || {}), {"date":{"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"abbr_month_names":["","jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"formats":{"default":"%m/%d/%Y","legal":"%d %B %Y","long":"%B %d, %Y","month":"%B %Y","month_letter":"%d %B %Y","short":"%b %d","short_month":"%m/%Y"},"month_names":["","january","february","march","april","may","june","july","august","september","october","november","december"],"order":["month","day","year"]},"front-end":{"leaflet":{"draw":{"handlers":{"circle":{"tooltip":{"start":"Click and drag to draw circle."}},"marker":{"tooltip":{"start":"Click map to place marker."}},"polygon":{"tooltip":{"cont":"Click to continue drawing shape.","end":"Click first point to close this shape.","start":"Click to start drawing shape."}},"polyline":{"error":"\u003cstrong\u003eError:\u003c/strong\u003e shape edges cannot cross!","tooltip":{"cont":"Click to continue drawing line.","end":"Click last point to finish line.","start":"Click to start drawing line."}},"rectangle":{"tooltip":{"start":"Click and drag to draw rectangle."}},"simpleshape":{"tooltip":{"end":"Release mouse to finish drawing."}}},"toolbar":{"actions":{"text":"Cancel","title":"Cancel drawing"},"buttons":{"circle":"Draw a circle","marker":"Draw a marker","polygon":"Draw a polygon","polyline":"Draw a polyline","rectangle":"Draw a rectangle"},"undo":{"text":"Delete last point","title":"Delete last point drawn"}}},"edit":{"handlers":{"edit":{"tooltip":{"subtext":"Click cancel to undo changes","text":"Drag handles, or marker to edit feature"}},"remove":{"tooltip":{"text":"Click on a feature to remove"}}},"toolbar":{"actions":{"cancel":{"text":"Cancel","title":"Cancel editing, discards all changes"},"save":{"text":"Save","title":"Save changes"}},"buttons":{"edit":"Edit layers","editDisabled":"No layers to edit","remove":"Delete layers","removeDisabled":"No layers to delete"}}},"fullscreenTitle":"Full Screen","importerButtonTitle":"Import","zoomInTitle":"Zoom in","zoomOutTitle":"Zoom out"}},"time":{"am":"am","formats":{"compact":"%m/%d/%Y %H:%M","default":"%b. %d, %Y at %H:%M:%S","devise":{"mailer":{"invitation_instructions":{"accept_until_format":"%B %d, %Y %I:%M %p"}}},"long":"%B %d, %Y %H:%M","short":"%d %b %H:%M"},"pm":"pm"}});
I18n.translations["fra"] = I18n.extend((I18n.translations["fra"] || {}), {"date":{"abbr_day_names":["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],"abbr_month_names":["","janv","févr","mars","avr","mai","juin","juil","août","sept","oct","nov","déc"],"day_names":["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],"formats":{"default":"%d/%m/%Y","legal":"%d %B %Y","long":"%A %d %B %Y","month":"%B %Y","month_letter":"%d %B %Y","short":"%d %b","short_month":"%m/%Y"},"month_names":["","janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],"order":["day","month","year"]},"front-end":{"leaflet":{"draw":{"handlers":{"circle":{"tooltip":{"start":"Cliquez et déplacez pour dessiner un cercle."}},"marker":{"tooltip":{"start":"Cliquez sur la carte pour placer un marqueur."}},"polygon":{"tooltip":{"cont":"Cliquez pour continuer à dessiner une forme.","end":"Cliquez sur le dernier point pour fermer cette forme.","start":"Cliquez pour commencer à dessiner une forme."}},"polyline":{"error":"\u003cstrong\u003eErreur:\u003c/strong\u003e Les arrêtes de la forme ne doivent pas se croiser!","tooltip":{"cont":"Cliquez pour continuer à dessiner une ligne.","end":"Cliquez sur le dernier point pour terminer la ligne.","start":"Cliquez pour commencer à dessiner d’une ligne."}},"rectangle":{"tooltip":{"start":"Cliquez et déplacez pour dessiner un rectangle."}},"simpleshape":{"tooltip":{"end":"Relachez la souris pour finir de dessiner."}}},"toolbar":{"actions":{"text":"Annuler","title":"Annulez le dessin"},"buttons":{"circle":"Dessiner un cercle","marker":"Dessiner un marqueur","polygon":"Dessiner un polygone","polyline":"Dessiner une polyligne","rectangle":"Dessiner un rectangle"},"finish":{"text":"Terminer","title":"Terminer le dessin"},"undo":{"text":"Supprimer le dernier point","title":"Supprimer le dernier point déssiné"}}},"edit":{"handlers":{"edit":{"tooltip":{"subtext":"Cliquez sur Annuler pour revenir sur les changements","text":"Déplacez les ancres, ou le marqueur pour éditer l’objet"}},"remove":{"tooltip":{"text":"Cliquez sur l’objet à enlever"}}},"toolbar":{"actions":{"cancel":{"text":"Annuler","title":"Annulez l’édition, ignorer tous les changements"},"save":{"text":"Sauver","title":"Sauvegardez les changements"}},"buttons":{"edit":"Editer les couches","editDisabled":"Pas de couches à éditer","remove":"Supprimer les couches","removeDisabled":"Pas de couches à supprimer"}}},"fullscreenTitle":"Plein écran","importerButtonTitle":"Importer","zoomInTitle":"Zoomer","zoomOutTitle":"Dézoomer"}},"time":{"am":"am","formats":{"compact":"%d/%m/%Y %H:%M","default":"%d/%m/%Y %H:%M","devise":{"mailer":{"invitation_instructions":{"accept_until_format":"%d %B %Y %kh%M"}}},"long":"%A %d %B %Y à %H:%M","short":"%d %b %H:%M","time":"%H:%M"},"pm":"pm"}});
I18n.translations["ita"] = I18n.extend((I18n.translations["ita"] || {}), {"date":{"abbr_day_names":["dom","lun","mar","mer","gio","ven","sab"],"abbr_month_names":["","gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],"day_names":["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"],"formats":{"default":"%d/%m/%Y","legal":"% D% B% Y","long":"%d %B %Y","month":"% B% Y","month_letter":"% D% B% Y","short":"%d %b","short_month":"%m/%Y"},"month_names":["","gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],"order":["day","month","year"]},"front-end":{"leaflet":{"draw":{"handlers":{"circle":{"tooltip":{"start":"Fare clic e trascinare per disegnare cerchio."}},"marker":{"tooltip":{"start":"Clicca sulla mappa per posizionare marker."}},"polygon":{"tooltip":{"cont":"Clicca per continuare a disegnare la forma.","end":"Clicca primo punto per chiudere questa forma.","start":"Fare clic per iniziare a disegnare la forma."}},"polyline":{"error":"\u003cstrong\u003eErrore:\u003c/strong\u003e bordi di forma non possono attraversare!","tooltip":{"cont":"Clicca qui per continuare la linea di disegno.","end":"Clicca ultimo punto al traguardo.","start":"Fare clic per avviare la linea di disegno."}},"rectangle":{"tooltip":{"start":"Fare clic e trascinare per disegnare rettangolo."}},"simpleshape":{"tooltip":{"end":"Il mouse di rilascio per terminare il disegno."}}},"toolbar":{"actions":{"text":"Annulla","title":"Annulla disegno"},"buttons":{"circle":"Disegnare un cerchio","marker":"Disegnare un marker","polygon":"Disegnare un poligono","polyline":"Disegnare una polilinea","rectangle":"Disegnare un rettangolo"},"undo":{"text":"Cancellare l'ultimo punto","title":"Cancellare l'ultimo punto disegnato"}}},"edit":{"handlers":{"edit":{"tooltip":{"subtext":"Scegliere Annulla per annullare le modifiche.","text":"Maniglie di trascinamento, o marcatore di Modifica funzione."}},"remove":{"tooltip":{"text":"Fare clic su una funzione per rimuovere"}}},"toolbar":{"actions":{"cancel":{"text":"Annulla","title":"Annullare la modifica, scarta tutte le modifiche."},"save":{"text":"Salvare","title":"Salva I Cambiamenti."}},"buttons":{"edit":"Modificare i livelli.","editDisabled":"Non ci sono strati di modificare.","remove":"Eliminare i livelli.","removeDisabled":"Non ci sono livelli da eliminare."}}},"fullscreenTitle":"A schermo intero","importerButtonTitle":"Importare","zoomInTitle":"Ingrandire","zoomOutTitle":"Zoom indietro"}},"time":{"am":"am","formats":{"compact":"% M /% d /% Y% H:% M","default":"%a %d %b %Y, %H:%M:%S %z","devise":{"mailer":{"invitation_instructions":{"accept_until_format":"% B% d,% Y% H:% M% p"}}},"long":"%d %B %Y %H:%M","short":"%d %b %H:%M","time":"%H:%M"},"pm":"pm"}});
I18n.translations["jpn"] = I18n.extend((I18n.translations["jpn"] || {}), {"date":{"abbr_day_names":["日","月","火","水","木","金","土"],"abbr_month_names":["","一","二","三","四","五","六","七","八","九","十","十一","十二"],"day_names":["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],"formats":{"default":"%Y/%m/%d","legal":"%d %B %Y","long":"%Y年%m月%d日(%a)","month":"%Y年%m月","month_letter":"%d %B %Y","short":"%m/%d","short_month":"%m/%d"},"month_names":["","1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"order":["month","day","year"]},"front-end":{"leaflet":{"draw":{"handlers":{"circle":{"tooltip":{"start":"クリックして、円を描くようにドラッグします。"}},"marker":{"tooltip":{"start":"マーカーを配置するには、地図をクリックしてください。"}},"polygon":{"tooltip":{"cont":"形状の描画をクリックして続行します。","end":"この形状を閉じるには、最初のポイントをクリックしてください。","start":"形状を描画を開始する場合にクリックします。"}},"polyline":{"error":"\u003cstrong\u003eエラー：\u003c/strong\u003e形状のエッジが交差することはできません！","tooltip":{"cont":"描画ラインをクリックして続行します。","end":"行を終了する最後のポイントをクリックしてください。","start":"ラインを描画を開始する場合にクリックします。"}},"rectangle":{"tooltip":{"start":"四角形を描画するためにクリックしてドラッグします。"}},"simpleshape":{"tooltip":{"end":"描画を終了するには、マウスを離します。"}}},"toolbar":{"actions":{"text":"キャンセル","title":"図面をキャンセル"},"buttons":{"circle":"円を描きます","marker":"マーカーを引きます","polygon":"ポリゴンを描画","polyline":"ポリラインを描きます","rectangle":"四角形を描画"},"undo":{"text":"最後のポイントを削除します。","title":"描かれた最後のポイントを削除します。"}}},"edit":{"handlers":{"edit":{"tooltip":{"subtext":"変更を元に戻すには、[キャンセル]をクリックします。","text":"機能を編集するには、ハンドル、またはマーカーをドラッグします。"}},"remove":{"tooltip":{"text":"削除する機能をクリックしてください"}}},"toolbar":{"actions":{"cancel":{"text":"キャンセル","title":"編集をキャンセルし、すべての変更を破棄します。"},"save":{"text":"セーブ","title":"変更内容を保存。"}},"buttons":{"edit":"編集層。","editDisabled":"編集する層いいえ。","remove":"レイヤーを削除します。","removeDisabled":"削除するレイヤーいいえ。"}}},"fullscreenTitle":"全画面表示","importerButtonTitle":"インポート","zoomInTitle":"ズームイン","zoomOutTitle":"ズームアウトする"}},"time":{"am":"午前","formats":{"compact":"％のM /％D /％Y％のH：％M","default":"%Y/%m/%d %H:%M:%S","devise":{"mailer":{"invitation_instructions":{"accept_until_format":"％のB％dの、％Yの％I：％Mを％P"}}},"long":"%Y年%m月%d日(%a) %H時%M分%S秒 %z","short":"%y/%m/%d %H:%M","time":"%H:%M"},"pm":"午後"}});
I18n.translations["por"] = I18n.extend((I18n.translations["por"] || {}), {"date":{"abbr_day_names":["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],"abbr_month_names":["","jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],"day_names":["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sabádo"],"formats":{"default":"%d/%m/%Y","legal":"%d %B %Y","long":"%d de %B de %Y","month":"%B %Y","month_letter":"%d %B %Y","short":"%d %b","short_month":"%m/%Y"},"month_names":["","janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],"order":["day","month","year"]},"front-end":{"leaflet":{"draw":{"handlers":{"circle":{"tooltip":{"start":"Clique e arraste para desenhar círculo."}},"marker":{"tooltip":{"start":"Clique no mapa para colocar marcador."}},"polygon":{"tooltip":{"cont":"Clique para continuar a desenhar a forma.","end":"Clique primeiro ponto para fechar esta forma.","start":"Clique para começar a desenhar a forma."}},"polyline":{"error":"\u003cstrong\u003eErro:\u003c/strong\u003e forma bordas não pode cruzar!","tooltip":{"cont":"Clique para continuar a linha de desenho.","end":"Clique último ponto para terminar linha.","start":"Clique para iniciar a linha de desenho."}},"rectangle":{"tooltip":{"start":"Clique e arraste para desenhar um retângulo."}},"simpleshape":{"tooltip":{"end":"Rato de liberação para finalizar o desenho."}}},"toolbar":{"actions":{"text":"Cancelar","title":"Anular desenho"},"buttons":{"circle":"Desenhar um círculo","marker":"Desenhe um marcador","polygon":"Desenhar um polígono","polyline":"Desenhar um polígono","rectangle":"Desenhe um retângulo"},"undo":{"text":"Excluir último ponto","title":"Excluir último ponto desenhado"}}},"edit":{"handlers":{"edit":{"tooltip":{"subtext":"Cancele para desfazer as alterações.","text":"Alças de arrasto, ou marcador para editar recurso."}},"remove":{"tooltip":{"text":"Clique em um recurso para remover"}}},"toolbar":{"actions":{"cancel":{"text":"Cancelar","title":"Cancelar a edição, descarta todas as alterações."},"save":{"text":"Salvar","title":"Salvar alterações."}},"buttons":{"edit":"Editar camadas.","editDisabled":"Não há camadas para editar.","remove":"Excluir camadas.","removeDisabled":"Nenhuma camada excluir."}}},"fullscreenTitle":"Tela cheia","importerButtonTitle":"Importar","zoomInTitle":"Mais Zoom","zoomOutTitle":"Zoom out"}},"time":{"am":"am","formats":{"compact":"% M /% d /% Y% H:% M","default":"%a, %d de %B de %Y, %H:%M:%S","devise":{"mailer":{"invitation_instructions":{"accept_until_format":"% B% d,% Y% I:% M% p"}}},"long":"%d de %B de %Y, %H:%M","short":"%d de %B, %H:%M","time":"%H:%M"},"pm":"pm"}});
I18n.translations["spa"] = I18n.extend((I18n.translations["spa"] || {}), {"date":{"abbr_day_names":["Do","Lu","Ma","Mi","Ju","Vi","Sá"],"abbr_month_names":["","ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],"day_names":["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],"formats":{"default":"%d/%m/%Y","legal":"%d %B %Y","long":"%B %d, %Y","month":"% B% Y","month_letter":"%d %B %Y","short":"%b %d","short_month":"%m/%Y"},"month_names":["","enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],"order":["day","month","year"]},"front-end":{"leaflet":{"draw":{"handlers":{"circle":{"tooltip":{"start":"Haga clic y arrastre para dibujar el círculo."}},"marker":{"tooltip":{"start":"Haga clic en el mapa para colocar el marcador."}},"polygon":{"tooltip":{"cont":"Haga clic para continuar el dibujo de la forma.","end":"Haga clic en el primer punto para cerrar esta forma.","start":"Haga clic para empezar a dibujar la forma."}},"polyline":{"error":"\u003cstrong\u003eError:\u003c/strong\u003e bordes de la forma no pueden cruzar!","tooltip":{"cont":"Clic para continuar la línea de dibujo.","end":"Haga clic último punto de la línea de meta.","start":"Haga clic para iniciar la línea de dibujo."}},"rectangle":{"tooltip":{"start":"Haga clic y arrastre para dibujar un rectángulo."}},"simpleshape":{"tooltip":{"end":"Ratón de liberación para terminar de dibujar."}}},"toolbar":{"actions":{"text":"Cancelar","title":"Cancelar dibujo"},"buttons":{"circle":"Dibuja un circulo","marker":"Dibuje un marcador","polygon":"Dibujar un polígono","polyline":"Dibuje una polilínea","rectangle":"Dibujar un rectángulo"},"undo":{"text":"Eliminar último punto","title":"Eliminar último punto dibujado"}}},"edit":{"handlers":{"edit":{"tooltip":{"subtext":"Haga clic en Cancelar para deshacer los cambios.","text":"Control de arrastre, o marcador para editar función."}},"remove":{"tooltip":{"text":"Haga clic en una función para eliminar"}}},"toolbar":{"actions":{"cancel":{"text":"Cancelar","title":"Cancelar la edición, descarta todos los cambios."},"save":{"text":"Salvar","title":"Guardar cambios."}},"buttons":{"edit":"Editar las capas.","editDisabled":"No hay capas para editar.","remove":"Eliminar capas.","removeDisabled":"No hay capas que desea eliminar."}}},"fullscreenTitle":"Pantalla completa","importerButtonTitle":"Importar","zoomInTitle":"Acercarse","zoomOutTitle":"Disminuir el zoom"}},"time":{"am":"am","formats":{"compact":"% M /% d /% Y% H:% M","default":"%d %b. %Y - %H:%M:%S","devise":{"mailer":{"invitation_instructions":{"accept_until_format":"% B% d,% Y% I:% M% p"}}},"long":"%B %d, %Y %H:%M","short":"%d %b %H:%M","time":"%H:%M"},"pm":"pm"}});
