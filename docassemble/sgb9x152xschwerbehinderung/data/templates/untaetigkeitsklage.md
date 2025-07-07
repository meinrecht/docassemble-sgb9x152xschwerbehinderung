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


**Untätigkeitsklage**  
Antrag vom ${ verfahren.schritte["antrag"].datum } auf ${ verfahren.antrag.leistung }  
% if verfahren.status == "widerspruch":  
Bescheid vom ${ verfahren.schritte["bescheid"].datum }, Az.: ${ verfahren.schritte["bescheid"].az },  erlassen durch folgende Behörde: ${ verfahren.behoerde.name.text }, ${ verfahren.behoerde.address.address }, ${ verfahren.behoerde.address.zip } ${ verfahren.behoerde.address.city },  
Widerspruch vom ${ verfahren.schritte["widerspruch"].datum }  
% endif




[SKIPLINE]  
[SKIPLINE]  

Sehr geehrte Damen und Herren,

% if verfahren.antragsteller[0].vertreter.number() == 0:
hiermit erhebe ich Untätigkeitsklage.  
[SKIPLINE]
Ich beantrage:  
% elif verfahren.antragsteller[0].vertreter.number() == 1:
ich bin ${ verfahren.antragsteller[0].vertreter[0].nominativ() } von ${ verfahren.antragsteller[0] }, wohnhaft ${ verfahren.antragsteller[0].vertreter[0].address.address }, ${ verfahren.antragsteller[0].vertreter[0].address.zip } ${ verfahren.antragsteller[0].vertreter[0].address.city }. Die nachfolgenden Willenserklärungen und Erklärungen gebe ich nicht im eigenen Namen ab. Ich handle vielmehr im Namen von ${ verfahren.antragsteller[0] } und auf Grundlage der mir zustehenden Vertretungsmacht. Hiermit erhebe ich für ${ verfahren.antragsteller[0] } Untätigkeitsklage.  
[SKIPLINE]
Ich beantrage:  
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
[SKIPLINE]
Hiermit erheben wir für ${ verfahren.antragsteller[0] } Untätigkeitsklage.  
[SKIPLINE]
Wir beantragen:  
% endif


% if verfahren.status == "antrag":
 > Die Behörde wird verpflichtet, ${ verfahren.antragsteller[0] } folgende Leistung zu gewähren:  

 > ${ verfahren.antrag.leistung } ab dem ${ verfahren.antrag.leistung_ab_wann }.

% elif verfahren.status == "widerspruch":
 > Der Bescheid vom ${ verfahren.schritte["antrag"].datum } wird aufgehoben und die Behörde wird verpflichtet, ${ verfahren.antragsteller[0] } folgende Leistung zu gewähren:  

 > ${ verfahren.antrag.leistung } ab dem ${ verfahren.antrag.leistung_ab_wann }.

% endif

[SKIPLINE]  
[SKIPLINE]
[FLUSHLEFT]


**Begründung:**

[SKIPLINE]  
1.
[SKIPLINE]
% if verfahren.antragsteller[0].vertreter.number() == 0:
Ich habe mit Antrag vom ${ verfahren.schritte["antrag"].datum } folgende Leistung begehrt: ${ verfahren.antrag.leistung }.
% else:
Mit Schreiben vom ${ verfahren.schritte["antrag"].datum } wurde für ${ verfahren.antragsteller[0] } folgende Leistung begehrt: ${ verfahren.antrag.leistung }.  
% endif

% if verfahren.status == "antrag":
Die beklagte Behörde hat über diesen Antrag noch nicht entschieden.  
% elif verfahren.status == "widerspruch":
Die beklagte Behörde hat den Antrag mit Bescheid vom ${ verfahren.schritte["bescheid"].datum } abgelehnt.  
  % if verfahren.antragsteller[0].vertreter.number() == 0:
Hiergegen habe ich mit Schreiben vom ${ verfahren.schritte["widerspruch"].datum } Widerspruch eingelegt, über den beklagte Behörde noch nicht entschieden hat.  
  % else:
Hiergegen wurde mit Schreiben vom ${ verfahren.schritte["widerspruch"].datum } Widerspruch eingelegt, über den die beklagte Behörde noch nicht entschieden hat.  
  % endif
% endif


Daher ist Klage geboten.

[SKIPLINE]
2.
[SKIPLINE]
% if verfahren.antragsteller[0].vertreter.number() == 0:
Ich stütze den Anspruch auf ${ verfahren.antrag.gesetz }. Die beklagte Behörde gewährt die Leistung zu Unrecht nicht. Tatsächlich besteht der geltend gemachte Anspruch.  

% elif verfahren.antragsteller[0].vertreter.number() == 1:
Ich stütze den Anspruch auf ${ verfahren.antrag.gesetz }. Die beklagte Behörde gewährt die Leistung zu Unrecht nicht. Tatsächlich besteht der geltend gemachte Anspruch.  

% else:
Wir stützen den Anspruch auf ${ verfahren.antrag.gesetz }. Die beklagte Behörde gewährt die Leistung zu Unrecht nicht. Tatsächlich besteht der geltend gemachte Anspruch.  

% endif  


Die Behörde hat nicht innerhalb der gesetzlichen Frist entschieden. Die Klage ist deshalb als Untätigkeitsklage zulässig.    

${ begruendung }
 

[SKIPLINE]  
[SKIPLINE]  


Mit freundlichen Grüßen,  

[SKIPLINE]  
[SKIPLINE]  
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