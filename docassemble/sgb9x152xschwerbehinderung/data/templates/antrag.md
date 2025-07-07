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
${ verfahren.behoerde.address.address }  
${ verfahren.behoerde.address.zip } ${ verfahren.behoerde.address.city }
[SKIPLINE]  
[SKIPLINE]  
[FLUSHRIGHT]  
${ today() }  

[SKIPLINE]  
[SKIPLINE]  

[FLUSHLEFT]   
**Antrag auf ${ verfahren.antrag.leistung }**


[SKIPLINE]  
[SKIPLINE]  

Sehr geehrte Damen und Herren,


% if verfahren.antragsteller[0].vertreter.number() == 0:
ich beantrage folgende Leistung:  

% elif verfahren.antragsteller[0].vertreter.number() == 1:
ich bin ${ verfahren.antragsteller[0].vertreter[0].nominativ() } von ${ verfahren.antragsteller[0] }, wohnhaft ${ verfahren.antragsteller[0].vertreter[0].address.address }, ${ verfahren.antragsteller[0].vertreter[0].address.zip } ${ verfahren.antragsteller[0].vertreter[0].address.city }.
Die nachfolgenden Willenserklärungen und Erklärungen gebe ich nicht im eigenen Namen ab. Ich handle vielmehr im Namen von ${ verfahren.antragsteller[0] } und auf Grundlage der mir zustehenden Vertretungsmacht.  

Ich beantrage für ${ verfahren.antragsteller[0] } folgende Leistung:  

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
Wir beantragen für ${ verfahren.antragsteller[0] } folgende Leistung:  

% endif


[START_INDENTATION]
${ verfahren.antrag.leistung } ab dem ${ verfahren.antrag.leistung_ab_wann }.  
[SKIPLINE]
[SKIPLINE]
[STOP_INDENTATION]


**Begründung:**  

% if verfahren.antragsteller[0].vertreter.number() == 0:
Ich stütze den Anspruch auf ${ verfahren.antrag.gesetz }.
% elif verfahren.antragsteller[0].vertreter.number() == 1:
Ich stütze den Anspruch auf ${ verfahren.antrag.gesetz }.
% else:
Wir stützen den Anspruch auf ${ verfahren.antrag.gesetz }.
% endif  

${ begruendung }


% if verfahren.antragsteller[0].vertreter.number() == 0:
Bitte senden Sie mir, falls die Verwendung erforderlich ist, ein entsprechendes Antragsformular zu.
% elif verfahren.antragsteller[0].vertreter.number() == 1:
Bitte senden Sie mir, falls die Verwendung erforderlich ist, ein entsprechendes Antragsformular zu.
% else:
Bitte senden Sie uns, falls die Verwendung erforderlich ist, ein entsprechendes Antragsformular zu.
% endif
  

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