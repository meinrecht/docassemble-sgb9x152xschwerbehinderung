[FLUSHRIGHT]
[SINGLESPACING]
% if verfahren.antragsteller[0].vertreter.number() == 0:
  % for a in verfahren.antragsteller:
${ a }  
${ a.address.address }  
${ a.address.zip } ${ a.address.city }
  % endfor
% else:
${ empfaenger }  
${ empfaenger.address.address }  
${ empfaenger.address.zip } ${ empfaenger.address.city }
% endif

[FLUSHLEFT]
[SKIPLINE]
[SKIPLINE]  
[SKIPLINE]  

${ verfahren.antrag.gericht.address_block() }


[SKIPLINE]  
[SKIPLINE]  
[FLUSHRIGHT]  
${ today() }  

[SKIPLINE]  
[SKIPLINE]  



[FLUSHLEFT]
**Antrag auf Erlass einer einstweiligen Anordnung**  
Antrag auf ${ verfahren.antrag.leistung } gemäß ${ verfahren.antrag.gesetz } vom ${ verfahren.schritte["antrag"].datum }  
% if verfahren.status == "bescheid":
Bescheid vom ${ verfahren.schritte["bescheid"].datum }, Az.: ${ verfahren.schritte["bescheid"].az }, erlassen durch folgende Behörde: ${ verfahren.behoerde.name.text }, ${ verfahren.behoerde.address.address }, ${ verfahren.behoerde.address.zip } ${ verfahren.behoerde.address.city },  
% elif verfahren.status == "widerspruchsbescheid":
Bescheid vom ${ verfahren.schritte["bescheid"].datum }, Az.: ${ verfahren.schritte["bescheid"].az }, erlassen durch folgende Behörde: ${ verfahren.behoerde.name.text }, ${ verfahren.behoerde.address.address }, ${ verfahren.behoerde.address.zip } ${ verfahren.behoerde.address.city },  
Widerspruchsbescheid vom ${ verfahren.schritte["bescheid"].datum }, Az.: ${ verfahren.schritte["bescheid"].az }  
% endif


[SKIPLINE]  
[SKIPLINE]  

Sehr geehrte Damen und Herren,



% if verfahren.antragsteller[0].vertreter.number() == 0:
hiermit beantrage ich den Erlass einer einstweiligen Anordnung.
% elif verfahren.antragsteller[0].vertreter.number() == 1:
ich bin ${ verfahren.antragsteller[0].vertreter[0].nominativ() } von ${ verfahren.antragsteller[0] }, wohnhaft ${ verfahren.antragsteller[0].vertreter[0].address.address }, ${ verfahren.antragsteller[0].vertreter[0].address.zip } ${ verfahren.antragsteller[0].vertreter[0].address.city }. Die nachfolgenden Willenserklärungen und Erklärungen gebe ich nicht im eigenen Namen ab. Ich handle vielmehr im Namen von ${ verfahren.antragsteller[0] } und auf Grundlage der mir zustehenden Vertretungsmacht. Hiermit beantrage ich für ${ verfahren.antragsteller[0] } den Erlass einer einstweiligen Anordnung.
% else:
  % if any(v for v in verfahren.antragsteller[0].vertreter if v.rolle == "vater") and any(v for v in verfahren.antragsteller[0].vertreter if v.rolle == "mutter") and verfahren.antragsteller[0].vertreter.number() == 2:
wir,
[SKIPLINE]
    % for a in verfahren.antragsteller:
      % if a.vertreter.number():
        % for v in a.vertreter:
${ v }, wohnhaft ${ a.address.address }, ${ a.address.zip } ${ a.address.city } (${ v.nominativ() }),  
        % endfor
      % endif
    % endfor
[SKIPLINE]
sind die Eltern von ${ verfahren.antragsteller[0] }, wohnhaft ${ a.address.address }, ${ a.address.zip } ${ a.address.city }. 
  % else:
wir,
[SKIPLINE]
    % for a in verfahren.antragsteller:
      % if a.vertreter.number():
        % for v in a.vertreter:
${ v }, wohnhaft ${ a.address.address }, ${ a.address.zip } ${ a.address.city } (${ v.nominativ() }),  
        % endfor
      % endif
    % endfor
[SKIPLINE]
vertreten ${ verfahren.antragsteller[0] }, wohnhaft ${ a.address.address }, ${ a.address.zip } ${ a.address.city }.
  % endif
Die nachfolgenden Willenserklärungen und Erklärungen geben wir nicht im eigenen Namen ab. Wir handeln vielmehr im Namen von ${ verfahren.antragsteller[0] } und auf Grundlage der uns zustehenden Vertretungsmacht. Wir beantragen für ${ verfahren.antragsteller[0] } den Erlass einer einstweiligen Anordnung.
% endif



[SKIPLINE]

% if verfahren.antragsteller[0].vertreter.number() == 0:
Ich beantrage,
% elif verfahren.antragsteller[0].vertreter.number() == 1:
Ich beantrage für ${ verfahren.antragsteller[0] },
% else:
Wir beantragen für ${ verfahren.antragsteller[0] },
% endif



 
  
 > die Behörde im Wege der einstweiligen Anordnung zu verpflichten, folgende Leistung zu gewähren:

 > ${ verfahren.antrag.leistung } ab dem ${ verfahren.antrag.leistung_ab_wann }.  



**Begründung:**

[SKIPLINE]
1.
[SKIPLINE]
% if verfahren.antragsteller[0].vertreter.number() == 0:
Ich habe mit Schreiben vom ${ verfahren.schritte["antrag"].datum } folgende Leistung beantragt:
${ verfahren.antrag.leistung }.
% else:
Mit Schreiben vom ${ verfahren.schritte["antrag"].datum } wurde für ${ verfahren.antragsteller[0] } folgende Leistung beantragt: ${ verfahren.antrag.leistung }.
% endif


% if verfahren.status == "antrag":
Die beklagte Behörde hat über diesen Antrag noch nicht entschieden.
% elif verfahren.status == "bescheid":
Die beklagte Behörde hat den Antrag mit Bescheid vom ${ verfahren.schritte["bescheid"].datum } abgelehnt.
% elif verfahren.status == "widerspruch":
Die beklagte Behörde hat den Antrag mit Bescheid vom ${ verfahren.schritte["bescheid"].datum } abgelehnt.
  % if verfahren.antragsteller[0].vertreter.number() == 0:
Hiergegen habe ich mit Schreiben vom ${ verfahren.schritte["widerspruch"].datum } Widerspruch eingelegt.  
  % else:
Hiergegen wurde mit Schreiben vom ${ verfahren.schritte["widerspruch"].datum } Widerspruch eingelegt.
  % endif
% elif verfahren.status == "widerspruchsbescheid":
Der Widerspruch wurde mit Widerspruchsbescheid vom ${ verfahren.schritte["widerspruchsbescheid"].datum } zurückgewiesen.
% endif

Die Sache ist eilbedürftig.

% if verfahren.antragsteller[0].vertreter.number() == 0:
Wegen der weiteren Einzelheiten verweise ich auf die Akten der Behörde.
% elif verfahren.antragsteller[0].vertreter.number() == 1:
Wegen der weiteren Einzelheiten verweise ich auf die Akten der Behörde.
% else:
Wegen der weiteren Einzelheiten verweisen wir auf die Akten der Behörde.
% endif

[SKIPLINE]
2.
[SKIPLINE]
% if verfahren.antragsteller[0].vertreter.number() == 0:
Ich stütze den Anspruch auf ${ verfahren.antrag.gesetz }.  

% elif verfahren.antragsteller[0].vertreter.number() == 1:
Ich stütze den Anspruch von ${ verfahren.antragsteller[0] } auf ${ verfahren.antrag.gesetz }.  

% else:
Wir stützen den Anspruch von ${ verfahren.antragsteller[0] } auf ${ verfahren.antrag.gesetz }.  

% endif


${ begruendung }  



% if verfahren.antragsteller[0].vertreter.number() == 0:
Ich benötige die Leistung dringend. Es ist Eile geboten. Zur Begründung der Eilbedürftigkeit führe ich aus:  
% elif verfahren.antragsteller[0].vertreter.number() == 1:
${ verfahren.antragsteller[0] } benötigt die Leistung dringend. Es ist Eile geboten.  

% else:
${ verfahren.antragsteller[0] } benötigt die Leistung dringend. Es ist Eile geboten.  

% endif


${ begruendung_eilbeduerftigkeit }  

[SKIPLINE]  
[SKIPLINE]  


Mit freundlichen Grüßen,  

[SKIPLINE]  
[SKIPLINE]  
[FLUSHLEFT]
% if verfahren.antragsteller[0].vertreter.number() == 0:
  % for a in verfahren.antragsteller:
${ a }   
  % endfor
% else:
  % for a in verfahren.antragsteller:
    % if a.vertreter.number():
      % for v in a.vertreter:
${ v } (${ v.nominativ() })
[SKIPLINE]  
[SKIPLINE]  
      % endfor
    % endif
  % endfor
% endif

[PAGEBREAK]

% if defined("verfahren.schritte['antrag']"):
% if not verfahren.schritte['antrag'].dokument == None:
${verfahren.schritte['antrag'].dokument}  
% endif
% endif

% if defined("verfahren.schritte['bescheid']"):
% if not verfahren.schritte['bescheid'].dokument == None:
${verfahren.schritte['bescheid'].dokument}  
% endif
% endif

% if defined("verfahren.schritte['widerspruch']"):
% if not verfahren.schritte['widerspruch'].dokument == None:
${verfahren.schritte['widerspruch'].dokument}  
% endif
% endif

% if defined("verfahren.schritte['widerspruchsbescheid']"):
% if not verfahren.schritte['widerspruchsbescheid'].dokument == None:
${verfahren.schritte['widerspruchsbescheid'].dokument}  
% endif
% endif

% if defined("verfahren.schritte['klage']"):
% if not verfahren.schritte['klage'].dokument == None:
${verfahren.schritte['klage'].dokument}  
% endif
% endif