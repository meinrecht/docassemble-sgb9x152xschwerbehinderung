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
${ verfahren.behoerde }  
${ verfahren.behoerde.address }    
[SKIPLINE]  
[SKIPLINE]  
[FLUSHRIGHT]  
${ today() }  

[SKIPLINE]  
[SKIPLINE]  

[FLUSHLEFT]  
**Überprüfungsantrag nach § 44 SGB X**  

**Antrag auf ${ verfahren.antrag.leistung } vom ${ verfahren.schritte["antrag"].datum }**  
% if verfahren.status == "bescheid":
**Ihr Bescheid vom ${ verfahren.schritte["bescheid"].datum }, Az.: ${ verfahren.schritte["bescheid"].az }**  
% elif verfahren.status == "widerspruchsbescheid":
**Ihr Bescheid vom ${ verfahren.schritte["bescheid"].datum }, Az.: ${ verfahren.schritte["bescheid"].az }
Ihr Widerspruchsbescheid vom ${ verfahren.schritte["widerspruchsbescheid"].datum }, Az.: ${ verfahren.schritte["widerspruchsbescheid"].az }**  
% endif

[SKIPLINE]  
[SKIPLINE]  

Sehr geehrte Damen und Herren,

% if verfahren.antragsteller[0].vertreter.number() == 0:
hiermit beantrage ich,  

 > dass der im Betreff genannte Bescheid gemäß § 44 SGB X zurückgenommen wird und dass die mit Antrag vom ${ verfahren.schritte["antrag"].datum } beantragte Leistung (${ verfahren.antrag.leistung }) gewährt wird.
% elif verfahren.antragsteller[0].vertreter.number() == 1:
ich bin ${ verfahren.antragsteller[0].vertreter[0].nominativ() } von ${ verfahren.antragsteller[0] }, wohnhaft ${ verfahren.antragsteller[0].vertreter[0].address.address }, ${ verfahren.antragsteller[0].vertreter[0].address.zip } ${ verfahren.antragsteller[0].vertreter[0].address.city }. Die nachfolgenden Willenserklärungen und Erklärungen gebe ich nicht im eigenen Namen ab. Ich handle vielmehr im Namen von ${ verfahren.antragsteller[0] } und auf Grundlage der mir zustehenden Vertretungsmacht.  

Hiermit beantrage ich für ${ verfahren.antragsteller[0] },  

 > dass der im Betreff genannte Bescheid gemäß § 44 SGB X zurückgenommen wird und dass die mit Antrag vom ${ verfahren.schritte["antrag"].datum } beantragte Leistung (${ verfahren.antrag.leistung }) gewährt wird.
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
Die nachfolgenden Willenserklärungen und Erklärungen geben wir nicht im eigenen Namen ab. Wir handeln vielmehr im Namen von ${ verfahren.antragsteller[0] } und auf Grundlage der uns zustehenden Vertretungsmacht.  

Hiermit beantragen wir für ${ verfahren.antragsteller[0] },  

 > dass der im Betreff genannte Bescheid gemäß § 44 SGB X zurückgenommen wird und dass die mit Antrag vom ${ verfahren.schritte["antrag"].datum } beantragte Leistung (${ verfahren.antrag.leistung }) gewährt wird.
% endif


**Begründung:**

% if verfahren.antragsteller[0].vertreter.number() == 0:
Ich habe mit Schreiben vom ${ verfahren.schritte["antrag"].datum } 
${ verfahren.antrag.leistung } beantragt.
% else:
Mit Schreiben vom ${ verfahren.schritte["antrag"].datum } wurde für ${ verfahren.antragsteller[0] } folgende Leistung beantragt:  

${ verfahren.antrag.leistung }.  

% endif

 
Der Bescheid vom ${ verfahren.schritte["bescheid"].datum }, Az.: ${ verfahren.schritte["bescheid"].az }, ist unrichtig.

Die Frist zur Einlegung des Rechtsbehelfs ist zwar abgelaufen. Soweit sich aber im Einzelfall ergibt, dass bei Erlass eines Verwaltungsaktes das Recht unrichtig angewandt oder von einem Sachverhalt ausgegangen worden ist, der sich als unrichtig erweist, und soweit deshalb Sozialleistungen zu Unrecht nicht erbracht oder Beiträge zu Unrecht erhoben worden sind, ist der Verwaltungsakt, auch nachdem er unanfechtbar geworden ist, mit Wirkung für die Vergangenheit zurückzunehmen (§ 44 Abs. 1 S. 1 SGB X). Diese Voraussetzungen liegen hier vor.

% if verfahren.antragsteller[0].vertreter.number() == 0:
Ich stütze den Anspruch auf ${ verfahren.antrag.gesetz }. Es besteht ein Anspruch auf die geltend gemachte Leistung.  

Zur Begründung des Anspruches trage ich Folgendes vor:  

% elif verfahren.antragsteller[0].vertreter.number() == 1:
Ich stütze den Anspruch von ${ verfahren.antragsteller[0] } auf ${ verfahren.antrag.gesetz }. Die  Leistung wurde zu Unrecht verweigert. Tatsächlich besteht der geltend gemachte Anspruch.  

Zur Begründung des Anspruches trage ich Folgendes vor:  

% else:
Wir stützen den Anspruch von ${ verfahren.antragsteller[0] } auf ${ verfahren.antrag.gesetz }. Die Leistung wurde zu unrecht verweigert. Tatsächlich besteht der geltend gemachte Anspruch.  

Zur Begründung des Anspruches tragen wir Folgendes vor:  

% endif


${ begruendung }  
  


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