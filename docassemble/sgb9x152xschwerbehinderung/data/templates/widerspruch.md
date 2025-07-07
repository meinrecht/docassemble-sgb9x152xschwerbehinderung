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
**Antrag vom ${ verfahren.schritte["antrag"].datum } auf ${ verfahren.antrag.leistung }   
Ihr Bescheid vom ${ verfahren.schritte["bescheid"].datum }, Az.: ${ verfahren.schritte["bescheid"].az }**


[SKIPLINE]  
[SKIPLINE]  

Sehr geehrte Damen und Herren,


% if verfahren.antragsteller[0].vertreter.number() == 0:
gegen Ihren o.a. Bescheid lege ich


> **Widerspruch**


ein.  

% elif verfahren.antragsteller[0].vertreter.number() == 1:
ich bin ${ verfahren.antragsteller[0].vertreter[0].nominativ() } von ${ verfahren.antragsteller[0] }, wohnhaft ${ verfahren.antragsteller[0].vertreter[0].address.address }, ${ verfahren.antragsteller[0].vertreter[0].address.zip } ${ verfahren.antragsteller[0].vertreter[0].address.city }. Die nachfolgenden Willenserklärungen und Erklärungen gebe ich nicht im eigenen Namen ab. Ich handle vielmehr im Namen von ${ verfahren.antragsteller[0] } und auf Grundlage der mir zustehenden Vertretungsmacht. Gegen Ihren o.a. Bescheid lege ich für ${ verfahren.antragsteller[0] }

> **Widerspruch**

ein.  

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
Gegen Ihren o.a. Bescheid legen wir für ${ verfahren.antragsteller[0] }

  
> **Widerspruch**

ein.  

% endif


**Begründung:**


% if verfahren.antragsteller[0].vertreter.number() == 0:
Ich stütze den Anspruch auf ${ verfahren.antrag.gesetz }. Sie verweigern die Leistung zu Unrecht. Tatsächlich besteht der geltend gemachte Anspruch.  

% elif verfahren.antragsteller[0].vertreter.number() == 1:
Ich stütze den Anspruch auf ${ verfahren.antrag.gesetz }. Sie verweigern die Leistung zu Unrecht. Tatsächlich besteht der geltend gemachte Anspruch.  

% else:
Wir stützen den Anspruch auf ${ verfahren.antrag.gesetz }. Sie verweigern die Leistung zu Unrecht. Tatsächlich besteht der geltend gemachte Anspruch.  

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