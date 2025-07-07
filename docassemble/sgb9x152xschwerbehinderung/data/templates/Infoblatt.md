[BOLDCENTER]\fontsize{18}{20}\selectfont ${ leistung_umgangssprachlich }  


[FLUSHLEFT]Im Folgenden erhältst du Informationen zu deinen nächsten Schritten sowie zu der Leistung ${ leistung_umgangssprachlich }.

[SKIPLINE]
[SKIPLINE]

[BOLDCENTER]\fontsize{16}{18}\selectfont Die nächsten Schritte

[FLUSHLEFT]
% if verfahren.status == "nichts":
**Wir empfehlen, einen *Antrag* zu stellen.**  

Drucke dafür das beigefügte Dokument aus und sende es an die im Dokument angegebene Stelle.  

**Hinweise:**

1. Sende Dokumente per Einwurfeinschreiben. So kannst du später nachweisen, ob und wann dein Schreiben zugestellt wurde.
2. Sende die Dokumente **nicht** per Mail, denn dein Schreiben muss eigenhändig unterschrieben sein. Das nennt man Schriftform-Erfordernis.
3. **Vergiss nicht, die Dokumente zu unterschreiben!**

[PAGEBREAK]

[BOLDCENTER]\fontsize{16}{18}\selectfont Ein Antrag, was ist das genau?

Ein Antrag ist die Forderung an eine Behörde, dass du eine Leistung benötigst. Das kann eine Geld-Leistung oder eine andere Leistung sein. Der Antrag ist wichtig, weil die Behörde in den meisten Fällen nicht von selbst akiv wird und Leistungen gewährt. 

In dem Antrag sollte stehen, was du benötigst und warum. Wir empfehlen, einen Antrag IMMER schriftlich, also per Brief, zu stellen. Bei der Post kann man den Brief "per Einwurfeinschreiben" senden, damit man später einen Beweis hat, dass der Brief mit dem Antrag angekommen ist. Wann der Antrag angekommen ist, ist auch wichtig für die Frage, ab wann man eine Leistung bekommt. 

Häufig fordern Behörden, dass man für einen Antrag ein Antragsformular benutzt. **Trotzdem ist es gut, so schnell wie möglich den hier erstellten Antrag zu stellen, auch ohne das Antragsformular.** Denn: Für die Frage, ab wann man eine Leistung bekommt, ist wichtig wann der Antrag gestellt wurde und dazu reicht ein einfacher Brief. Es kommt nicht darauf an, wann das *Antragsformular* geschickt wurde. Das Formular sollte man dennoch sobald es geht nachreichen. **Bitte vergiss deine Unterschrift am Ende des Schreibens nicht!**

Wenn die Behörde den Antrag erhalten hat, prüft sie dein Anliegen und entscheidet, ob du die geforderte Leistung bekommst oder nicht. Die Entscheidung der Behörde steht in einem sogenannten *Bescheid*, den du per Post erhätst.  
  
% elif verfahren.status == "antrag":  
  % if not verfahren.frist_abgelaufen:
    % if verfahren.antrag.eilverfahren == True:
**Du hast angegeben, dass du die Leistung bereits ab dem ${ verfahren.antrag.leistung_ab_wann } benötigst. Wir empfehlen daher, bei Gericht einen *Antrag auf einstweilige Anordnung* zu stellen.**  

Drucke dafür das beigefügte Dokument aus und sende es an die im Dokument angegebene Stelle.  

**Hinweise:**

1. Sende Dokumente per Einwurfeinschreiben. So kannst du später nachweisen, ob und wann dein Schreiben zugestellt wurde.
2. Sende die Dokumente **nicht** per Mail, denn dein Schreiben muss eigenhändig unterschrieben sein. Das nennt man Schriftform-Erfordernis.
3. **Vergiss nicht, die Dokumente zu unterschreiben!**

[PAGEBREAK]

[BOLDCENTER]\fontsize{16}{18}\selectfont Ein Antrag auf einstweilige Anordnung, was ist das?

Ein Antrag auf einstweilige Anordnung ist der Schritt um ein Eilverfahren zu beginnen. Ein Eilverfahren ist ein Verfahren bei Gericht. Es ist für die Fälle da, in denen es besonders schnell gehen muss. Häufig läuft ein Eilverfahren parallel zu einem anderen Schritt ab. Das liegt daran, dass der eigentlich nächste Schritt manchmal zu lange dauert. Behörden brauchen zum Beispiel manchmal mehrere Monate für eine Entscheidung. Gerichte brauchen bei normalen Klagen sogar manchmal mehr als ein Jahr. Wenn du aber zum Beispeil dringend Geld von der Behörde benötigst, kannst du so lange nicht warten. Deshalb gibt es das Eilverfahren. 

Und das beginnt mit dem Antrag auf einstweilige Anordnung. Der Antrag auf einstweilige Anordnung ist ein Schreiben an das Gericht, in dem steht, dass das Gericht in einem schnellen Verfahren über deinen Fall entscheiden soll. **Bitte vergiss deine Unterschrift am Ende des Schreibens nicht!** Nachdem du den Antrag auf einstweilige Anordnung an das Gericht geschickt haben, können zwei Sachen passieren: 

1. Das Gericht kann den Antrag ablehnen, weil es nicht findet, dass dein Fall eilig ist. Dann musst du doch auf die Entscheidung der Behörde warten.

2.  Oder das Gericht setzt einen Termin fest, in dem dein Fall besprochen wird. Zu diesem Termin im Gericht solltest du hingehen, weil du dort noch mal die Chance hast, alle Details zu deinem Fall zu erklären. Bei dem Termin wird eine Richterin oder ein Richter sein und meistens (aber nicht immer) eine Person von der Behörde. In dem Termin wird geklärt, ob du die gewünschte Leistung bekommst oder nicht.

**Auch wenn eine Situation bei Gericht immer aufregend ist, brauchst du keine Angst davor zu haben. Jeder in Deutschland ist berechtigt, sein Recht durchzusetzen. Egal ob das Gericht am Ende in deinem Sinne entscheidet oder nicht.**

Nach dem Termin bei Gericht trifft das Gericht eine Entscheidung. Entweder es entscheidet, dass die Behörde dir die Leistung zu dem gewünschten Zeitpunkt gewähren muss. Daran muss die Behörde sich dann halten. Oder es entscheidet, dass die Behörde recht hat und du die Leistung nicht zu dem gewünschten Zeitpunkt bekommst.
    % else:
Du hast am ${verfahren.schritte["antrag"].datum} einen Antrag gestellt. Aktuell kannst du keine weiteren Schritte vornehmen. Du musst warten, bis die Behörde eine Entscheidung getroffen hat. Dafür hat sie in der Regel 3 Monate Zeit. Die Entscheidung wird dir in einem Bescheid mitgeteilt.  

Wenn du bis zum ${datum_untaetigkeitsklage_antrag} nichts von der Behörde gehört hast, kommt als nächster Verfahrensschritt die Untätigkeitsklage in Betracht.  

Ab dem ${date_eilantrag} kommt auch ein Eilverfahren bei Gericht in Betracht, denn du hast angegeben, dass du die Leistung bereits ab dem ${ verfahren.antrag.leistung_ab_wann } benötigst.  

Wenn die Behörde einen Bescheid erlässt, mit dem du nicht einverstanden bist, kannst du in der Regel Widerspruch einlegen.  

    % endif
  % else:
    % if verfahren.antrag.eilverfahren == True:
**Wir empfehlen, eine *Untätigkeitsklage* zu erheben. Wir empfehlen zudem, einen *Antrag auf einstweilige Anordnung* zu stellen, denn du hast angegeben, dass du die Leistung bereits ab dem ${ verfahren.antrag.leistung_ab_wann } benötigst.**  

Drucke dafür die beigefügten Dokumente aus und sende sie an die in den Dokumenten angegebenen Stellen.  

**Hinweise:**

1. Sende Dokumente per Einwurfeinschreiben. So kannst du später nachweisen, ob und wann dein Schreiben zugestellt wurde.
2. Sende die Dokumente **nicht** per Mail, denn dein Schreiben muss eigenhändig unterschrieben sein. Das nennt man Schriftform-Erfordernis.
3. **Vergiss nicht, die Dokumente zu unterschreiben!**

[PAGEBREAK]  

[BOLDCENTER]\fontsize{16}{18}\selectfont Eine Untätigkeitsklage, was ist das?

Eine Untätigkeitsklage ist ein Verfahren bei Gericht. Es ist für die Fälle da, in denen die Behörde *untätig* ist, also in denen die Behörde nicht reagiert hat.  

Die Untätigkeitsklage ist ein Schreiben an das Gericht, in dem steht, dass das Gericht die Behörde dazu verpflichten soll, dir die benötigte Leistung zu gewähren. **Bitte vergiss deine Unterschrift am Ende des Schreibens nicht!** Nachdem du die Untätigkeitsklage an das Gericht geschickt haben, können zwei Sachen passieren: 

1. Das Gericht kann die Klage als unzulässig ablehnen, weil die Voraussetzungen für eine Untätigkeitsklage nicht vorliegen. Das kann verschiedene Gründe haben.

2.  Oder das Gericht setzt einen Termin fest, in dem dein Fall besprochen wird. Zu diesem Termin im Gericht solltest du hingehen, weil du dort noch mal die Chance hast, alle Details zu deinem Fall zu erklären. Bei dem Termin wird eine Richterin oder ein Richter sein und meistens (aber nicht immer) eine Person von der Behörde. In dem Termin wird geklärt, ob das Gericht die Behörde zu der gewünschten Leistung verpflichtet oder nicht.

**Auch wenn eine Situation bei Gericht immer aufregend ist, brauchst du keine Angst davor zu haben. Jeder in Deutschland ist berechtigt, sein Recht durchzusetzen. Egal ob das Gericht am Ende in deinem Sinne entscheidet oder nicht.**

Nach dem Termin bei Gericht trifft das Gericht eine Entscheidung. Wenn deine Untätigkeitsklage Erfolg hat, verpflichtet das Gericht die Behörde zu der gewünschten Leistung. Wenn deine Klage keinen Erfolg hat, wird die Klage abgewiesen, die Behörde muss die Leistung also nicht gewähren.  

[BOLDCENTER]\fontsize{16}{18}\selectfont  Ein Antrag auf einstweilige Anordnung, was ist das?

Ein Antrag auf einstweilige Anordnung ist der Schritt um ein Eilverfahren zu beginnen. Ein Eilverfahren ist ein Verfahren bei Gericht. Es ist für die Fälle da, in denen es besonders schnell gehen muss. Häufig läuft ein Eilverfahren parallel zu einem anderen Schritt ab. Das liegt daran, dass der eigentlich nächste Schritt manchmal zu lange dauert. Behörden brauchen zum Beispiel manchmal mehrere Monate für eine Entscheidung. Gerichte brauchen bei Klagen sogar manchmal mehr als ein Jahr. Wenn du aber zum Beispeil dringend Geld von der Behörde benötigst, kannst du so lange nicht warten. Deshalb gibt es das Eilverfahren. 

Und das beginnt mit dem Antrag auf einstweilige Anordnung. Der Antrag auf einstweilige Anordnung ist ein Schreiben an das Gericht, in dem steht, dass das Gericht in einem schnellen Verfahren über deinen Fall entscheiden soll. **Bitte vergiss deine Unterschrift am Ende des Schreibens nicht!** Nachdem du den Antrag auf einstweilige Anordnung an das Gericht geschickt haben, können zwei Sachen passieren: 

1. Das Gericht kann den Antrag ablehnen, weil es nicht findet, dass dein Fall eilig ist. Dann musst du doch auf die Entscheidung der Behörde warten.

2.  Oder das Gericht setzt einen Termin fest, in dem dein Fall besprochen wird. Zu diesem Termin im Gericht solltest du hingehen, weil du dort noch mal die Chance hast, alle Details zu deinem Fall zu erklären. Bei dem Termin wird eine Richterin oder ein Richter sein und meistens (aber nicht immer) eine Person von der Behörde. In dem Termin wird geklärt, ob du die gewünschte Leistung bekommst oder nicht.

**Auch wenn eine Situation bei Gericht immer aufregend ist, brauchst keine Angst davor zu haben. Jeder in Deutschland ist berechtigt, sein Recht durchzusetzen. Egal ob das Gericht am Ende in deinem Sinne entscheidet oder nicht.**

Nach dem Termin bei Gericht trifft das Gericht eine Entscheidung. Entweder es entscheidet, dass die Behörde dir die Leistung zu dem gewünschten Zeitpunkt gewähren muss. Daran muss die Behörde sich dann halten. Oder es entscheidet, dass die Behörde recht hat und du die Leistung nicht zu dem gewünschten Zeitpunkt bekommst.  

    % else:
**Wir empfehlen, eine *Untätigkeitsklage* zu erheben.**  

Drucke dafür das beigefügte Dokument aus und sende es an die im Dokument angegebene Stelle.  

**Hinweise:**

1. Sende Dokumente per Einwurfeinschreiben. So kannst du später nachweisen, ob und wann dein Schreiben zugestellt wurde.
2. Sende die Dokumente **nicht** per Mail, denn dein Schreiben muss eigenhändig unterschrieben sein. Das nennt man Schriftform-Erfordernis.
3. **Vergiss nicht, die Dokumente zu unterschreiben!**

[PAGEBREAK]

[BOLDCENTER]\fontsize{16}{18}\selectfont  Eine Untätigkeitsklage, was ist das?

Eine Untätigkeitsklage ist ein Verfahren bei Gericht. Es ist für die Fälle da, in denen die Behörde *untätig* ist, also in denen die Behörde nicht reagiert hat.  

Die Untätigkeitsklage ist ein Schreiben an das Gericht, in dem steht, dass das Gericht die Behörde dazu verpflichten soll, dir die benötigte Leistung zu gewähren. **Bitte vergiss deine Unterschrift am Ende des Schreibens nicht!** Nachdem du die Untätigkeitsklage an das Gericht geschickt hast, können zwei Sachen passieren: 

1. Das Gericht kann die Klage als unzulässig ablehnen, weil die Voraussetzungen für eine Untätigkeitsklage nicht vorliegen. Das kann verschiedene Gründe haben.

2.  Oder das Gericht setzt einen Termin fest, in dem dein Fall besprochen wird. Zu diesem Termin im Gericht solltest du hingehen, weil du dort noch mal die Chance hast, alle Details zu deinem Fall zu erklären. Bei dem Termin wird eine Richterin oder ein Richter sein und meistens (aber nicht immer) eine Person von der Behörde. In dem Termin wird geklärt, ob das Gericht die Behörde zu der gewünschten Leistung verpflichtet oder nicht.

**Auch wenn eine Situation bei Gericht immer aufregend ist, brauchst du keine Angst davor zu haben. Jeder in Deutschland ist berechtigt, sein Recht durchzusetzen. Egal ob das Gericht am Ende in deinem Sinne entscheidet oder nicht.**

Nach dem Termin bei Gericht trifft das Gericht eine Entscheidung. Wenn deine Untätigkeitsklage Erfolg hat, verpflichtet das Gericht die Behörde zu der gewünschten Leistung. Wenn deine Klage keinen Erfolg hat, wird die Klage abgewiesen, die Behörde muss die Leistung also nicht gewähren.  

    % endif
  % endif
       
% elif verfahren.status == "bescheid":
     
  % if not verfahren.frist_abgelaufen:
    % if verfahren.antrag.eilverfahren == True:
**Wir empfehlen, *Widerspruch* einzulegen. Wir empfehlen zudem, einen *Antrag auf einstweilige Anordnung* zu stellen, denn du hast angegeben, dass du die Leistung bereits ab dem ${ verfahren.antrag.leistung_ab_wann } benötigen.**  

Drucke dafür die beigefügten Dokumente aus und sende sie an die in den Dokumenten angegebenen Stellen.  

**Hinweise:**

1. Sende Dokumente per Einwurfeinschreiben. So kannst du später nachweisen, ob und wann dein Schreiben zugestellt wurde.
2. Sende die Dokumente **nicht** per Mail, denn dein Schreiben muss eigenhändig unterschrieben sein. Das nennt man Schriftform-Erfordernis.
3. **Vergiss nicht, die Dokumente zu unterschreiben!**

[PAGEBREAK]

[BOLDCENTER]\fontsize{16}{18}\selectfont Ein Widerspruch, was ist das?

Mit dem Widerspruch wendest du sich gegen die Entscheidung einer Behörde, wenn du mit der Entscheidung nicht einverstanden bist. Du kannst dich gegen die Entscheidung wenden, wenn die Behörde deinen Antrag auf eine Leistung abgelehnt hat. Aber zum Beispiel auch dann, wenn die Behörde dir nicht genug Geld gewährt oder nicht die richtige Leistung. **Bitte vergiss deine  Unterschrift am Ende des Schreibens nicht!**  

Der Widerspruch wird von der Behörde selbst bearbeitet, aber von einer anderen Abteilung in der Behörde. Die Entscheidung wird dann noch einmal überprüft und geschaut, ob Fehler vorliegen. Dazu gibt die Behörde dir in der Regel auch nochmal die Möglichkeit, deine Situation zu erklären. Wenn die Behörde Fehler findet, wird die Entscheidung abgeändert und der Widerspruch hat Erfolg. Wenn die Behörde keine Fehler findet, wird der Widerspruch abgeleht und es bleibt bei der bisherigen Entscheidung der Behörde.

Die Entscheidung der Behörde über deinen Widerspruch sendet sie dir per Post zu. Man nennt diese Entscheidung den Widerspruchs-Bescheid.  

[BOLDCENTER]\fontsize{16}{18}\selectfont Ein Antrag auf einstweilige Anordnung, was ist das?

Ein Antrag auf einstweilige Anordnung ist der Schritt um ein Eilverfahren zu beginnen. Ein Eilverfahren ist ein Verfahren bei Gericht. Es ist für die Fälle da, in denen es besonders schnell gehen muss. Häufig läuft ein Eilverfahren parallel zu einem anderen Schritt ab. Das liegt daran, dass der eigentlich nächste Schritt manchmal zu lange dauert. Behörden brauchen zum Beispiel manchmal mehrere Monate für eine Entscheidung. Gerichte brauchen bei Klagen sogar manchmal mehr als ein Jahr. Wenn du aber zum Beispeil dringend Geld von der Behörde benötigst, kannst du so lange nicht warten. Deshalb gibt es das Eilverfahren. 

Und das beginnt mit dem Antrag auf einstweilige Anordnung. Der Antrag auf einstweilige Anordnung ist ein Schreiben an das Gericht, in dem steht, dass das Gericht in einem schnellen Verfahren über deinen Fall entscheiden soll. **Bitte vergiss deine Unterschrift am Ende des Schreibens nicht!** Nachdem du den Antrag auf einstweilige Anordnung an das Gericht geschickt hast, können zwei Sachen passieren: 

1. Das Gericht kann den Antrag ablehnen, weil es nicht findet, dass dein Fall eilig ist. Dann musst du doch auf die Entscheidung der Behörde warten.

2.  Oder das Gericht setzt einen Termin fest, in dem dein Fall besprochen wird. Zu diesem Termin im Gericht solltest du hingehen, weil du dort noch mal die Chance hast, alle Details zu deinem Fall zu erklären. Bei dem Termin wird eine Richterin oder ein Richter sein und meistens (aber nicht immer) eine Person von der Behörde. In dem Termin wird geklärt, ob du die gewünschte Leistung bekommst oder nicht.

**Auch wenn eine Situation bei Gericht immer aufregend ist, brauchst du keine Angst davor zu haben. Jeder in Deutschland ist berechtigt, sein Recht durchzusetzen. Egal ob das Gericht am Ende in deinem Sinne entscheidet oder nicht.**

Nach dem Termin bei Gericht trifft das Gericht eine Entscheidung. Entweder es entscheidet, dass die Behörde dir die Leistung zu dem gewünschten Zeitpunkt gewähren muss. Daran muss die Behörde sich dann halten. Oder es entscheidet, dass die Behörde recht hat und du die Leistung nicht zu dem gewünschten Zeitpunkt bekommst.  

    % else:
**Wir empfehlen, *Widerspruch* einzulegen.**  

Drucke dafür das beigefügte Dokument aus und sende es an die im Dokument angegebene Stelle.  

**Hinweise:**

1. Sende Dokumente per Einwurfeinschreiben. So kannst du später nachweisen, ob und wann dein Schreiben zugestellt wurde.
2. Sende die Dokumente **nicht** per Mail, denn dein Schreiben muss eigenhändig unterschrieben sein. Das nennt man Schriftform-Erfordernis.
3. **Vergiss nicht, die Dokumente zu unterschreiben!**

[PAGEBREAK]

[BOLDCENTER]\fontsize{16}{18}\selectfont Ein Widerspruch, was ist das?

Mit dem Widerspruch wendest du dich gegen die Entscheidung einer Behörde, wenn du mit der Entscheidung nicht einverstanden bist. Du kannst dich gegen die Entscheidung wenden, wenn die Behörde deinen Antrag auf eine Leistung abgelehnt hat. Aber zum Beispiel auch dann, wenn die Behörde dir nicht genug Geld gewährt oder nicht die richtige Leistung. **Bitte vergiss deine  Unterschrift am Ende des Schreibens nicht!**  

Der Widerspruch wird von der Behörde selbst bearbeitet, aber von einer anderen Abteilung in der Behörde. Die Entscheidung wird dann noch einmal überprüft und geschaut, ob Fehler vorliegen. Dazu gibt die Behörde die in der Regel auch nochmal die Möglichkeit, deine Situation zu erklären. Wenn die Behörde Fehler findet, wird die Entscheidung abgeändert und der Widerspruch hat Erfolg. Wenn die Behörde keine Fehler findet, wird der Widerspruch abgeleht und es bleibt bei der bisherigen Entscheidung der Behörde.

Die Entscheidung der Behörde über deinen Widerspruch sendet sie dir per Post zu. Man nennt diese Entscheidung den Widerspruchs-Bescheid.  

    % endif
  % else:
**Die Widerspruchsfrist ist abgelaufen. Wir empfehlen, *einen Überprüfungsantrag* zu stellen.**  

Drucke dafür das beigefügte Dokument aus und sende es an die im Dokument angegebene Stelle.  

**Hinweise:**

1. Sende Dokumente per Einwurfeinschreiben. So kannst du später nachweisen, ob und wann dein Schreiben zugestellt wurde.
2. Sende die Dokumente **nicht** per Mail, denn dein Schreiben muss eigenhändig unterschrieben sein. Das nennt man Schriftform-Erfordernis.
3. **Vergiss nicht, die Dokumente zu unterschreiben!**

[PAGEBREAK]

[BOLDCENTER]\fontsize{16}{18}\selectfont Ein Überprüfungsantrag, was ist das?  

Ein Überprüfungsantrag ist die Forderung an eine Behörde, eine Entscheidung nocheinmal zu prüfen. Ein Überprüfungsantrag macht immmer dann Sinn, wenn die Frist für einen Widerspruch oder eine Klage schon abgelaufen ist. Ein Überprüfungsantrag wird von der Behörde bearbeitet, die die vorherige Entscheidung getroffen hat. 

Findet die Behörde Fehler in der Entscheidung, so ändert sie die Entscheidung. 
Ein Überprüfungsantrag ist ein besonderer Schritt, den es nur im Sozialrecht gibt, also etwa dann, wenn es um Sozialleistungen geht.  

  % endif
      
% elif verfahren.status == "widerspruch":
  % if not verfahren.frist_abgelaufen:
    % if verfahren.antrag.eilverfahren == True:
**Du hast angegeben, dass du die Leistung bereits ab dem ${ verfahren.antrag.leistung_ab_wann } benötigen. Wir empfehlen daher, einen *Antrag auf einstweilige Anordnung* zu stellen.**  

Drucke dafür das beigefügte Dokument aus und sende es an die im Dokument angegebene Stelle.  

**Hinweise:**

1. Sende Dokumente per Einwurfeinschreiben. So kannst du später nachweisen, ob und wann dein Schreiben zugestellt wurde.
2. Sende die Dokumente **nicht** per Mail, denn dein Schreiben muss eigenhändig unterschrieben sein. Das nennt man Schriftform-Erfordernis.
3. **Vergiss nicht, die Dokumente zu unterschreiben!**

[PAGEBREAK]

[BOLDCENTER]\fontsize{16}{18}\selectfont Ein Antrag auf einstweilige Anordnung, was ist das?

Ein Antrag auf einstweilige Anordnung ist der Schritt um ein Eilverfahren zu beginnen. Ein Eilverfahren ist ein Verfahren bei Gericht. Es ist für die Fälle da, in denen es besonders schnell gehen muss. Häufig läuft ein Eilverfahren parallel zu einem anderen Schritt ab. Das liegt daran, dass der eigentlich nächste Schritt manchmal zu lange dauert. Behörden brauchen zum Beispiel manchmal mehrere Monate für eine Entscheidung. Gerichte brauchen bei Klagen sogar manchmal mehr als ein Jahr. Wenn du aber zum Beispeil dringend Geld von der Behörde benötigst, kannst du so lange nicht warten. Deshalb gibt es das Eilverfahren. 

Und das beginnt mit dem Antrag auf einstweilige Anordnung. Der Antrag auf einstweilige Anordnung ist ein Schreiben an das Gericht, in dem steht, dass das Gericht in einem schnellen Verfahren über deinen Fall entscheiden soll. **Bitte vergiss deine Unterschrift am Ende des Schreibens nicht!** Nachdem du den Antrag auf einstweilige Anordnung an das Gericht geschickt hast, können zwei Sachen passieren: 

1. Das Gericht kann den Antrag ablehnen, weil es nicht findet, dass dein Fall eilig ist. Dann musst du doch auf die Entscheidung der Behörde warten.

2.  Oder das Gericht setzt einen Termin fest, in dem dein Fall besprochen wird. Zu diesem Termin im Gericht solltest du hingehen, weil du dort noch mal die Chance hast, alle Details zu deinem Fall zu erklären. Bei dem Termin wird eine Richterin oder ein Richter sein und meistens (aber nicht immer) eine Person von der Behörde. In dem Termin wird geklärt, ob du die gewünschte Leistung bekommst oder nicht.

**Auch wenn eine Situation bei Gericht immer aufregend ist, brauchst du keine Angst davor zu haben. Jeder in Deutschland ist berechtigt, sein Recht durchzusetzen. Egal ob das Gericht am Ende in deinem Sinne entscheidet oder nicht.**

Nach dem Termin bei Gericht trifft das Gericht eine Entscheidung. Entweder es entscheidet, dass die Behörde fir die Leistung zu dem gewünschten Zeitpunkt gewähren muss. Daran muss die Behörde sich dann halten. Oder es entscheidet, dass die Behörde recht hat und du die Leistung nicht zu dem gewünschten Zeitpunkt bekommst.  

    % else:
Du hast am ${verfahren.schritte["widerspruch"].datum} Widerspruch eingelegt. Aktuell kannst du keine weiteren Schritte vornehmen. Du musst warten, bis die Behörde eine Entscheidung über deinen Widerspruch getroffen hat. Dafür hat sie in der Regel 3 Monate Zeit. Die Entscheidung wird dir in einem Widerspruchsbescheid mitgeteilt.  

Wenn du bis zum ${datum_untaetigkeitsklage_widerspruch} nichts von der Behörde gehört hast, kommt als nächster Verfahrensschritt die Untätigkeitsklage in Betracht.  

Ab dem ${date_eilantrag} kommt auch ein Eilverfahren bei Gericht in Betracht, denn du hast angegeben, dass du die Leistung bereits ab dem ${ verfahren.antrag.leistung_ab_wann } benötigst.  

Wenn die Behörde einen Widerspruchsbescheid erlässt, mit dem du nicht einverstanden bist, kannst du Klage erheben.  

    % endif
  % else:
    % if verfahren.antrag.eilverfahren == True:
**Wir empfehlen, eine *Untätigkeitsklage* zu erheben. Wir empfehlen zudem, einen *Antrag auf einstweilige Anordnung* zu stellen, weil du angegeben hast, dass du die Leistung bereits ab dem ${ verfahren.antrag.leistung_ab_wann } benötigst.** 

Drucke dafür die beigefügten Dokumente aus und sende sie an die in den Dokumenten angegebenen Stellen.  

**Hinweise:**

1. Sende Dokumente per Einwurfeinschreiben. So kannst du später nachweisen, ob und wann dein Schreiben zugestellt wurde.
2. Sende die Dokumente **nicht** per Mail, denn dein Schreiben muss eigenhändig unterschrieben sein. Das nennt man Schriftform-Erfordernis.
3. **Vergiss nicht, die Dokumente zu unterschreiben!**

[PAGEBREAK]

[BOLDCENTER]\fontsize{16}{18}\selectfont Eine Untätigkeitsklage, was ist das?

Eine Untätigkeitsklage ist ein Verfahren bei Gericht. Es ist für die Fälle da, in denen die Behörde *untätig* ist, also in denen die Behörde nicht reagiert hat.  

Die Untätigkeitsklage ist ein Schreiben an das Gericht, in dem steht, dass das Gericht die Behörde dazu verpflichten soll, dir die benötigte Leistung zu gewähren. **Bitte vergiss deine Unterschrift am Ende des Schreibens nicht!** Nachdem du die Untätigkeitsklage an das Gericht geschickt hast, können zwei Sachen passieren: 

1. Das Gericht kann die Klage als unzulässig ablehnen, weil die Voraussetzungen für eine Untätigkeitsklage nicht vorliegen. Das kann verschiedene Gründe haben.

2.  Oder das Gericht setzt einen Termin fest, in dem dein Fall besprochen wird. Zu diesem Termin im Gericht solltest du hingehen, weil du dort noch mal die Chance hast, alle Details zu deinem Fall zu erklären. Bei dem Termin wird eine Richterin oder ein Richter sein und meistens (aber nicht immer) eine Person von der Behörde. In dem Termin wird geklärt, ob das Gericht die Behörde zu der gewünschten Leistung verpflichtet oder nicht.

**Auch wenn eine Situation bei Gericht immer aufregend ist, brauchst keine Angst davor zu haben. Jeder in Deutschland ist berechtigt, sein Recht durchzusetzen. Egal ob das Gericht am Ende in deinem Sinne entscheidet oder nicht.**

Nach dem Termin bei Gericht trifft das Gericht eine Entscheidung. Wenn deine Untätigkeitsklage Erfolg hat, verpflichtet das Gericht die Behörde zu der gewünschten Leistung. Wenn deine Klage keinen Erfolg hat, wird die Klage abgewiesen, die Behörde muss die Leistung also nicht gewähren.  

[BOLDCENTER]\fontsize{16}{18}\selectfont Ein Antrag auf einstweilige Anordnung, was ist das?

Ein Antrag auf einstweilige Anordnung ist der Schritt um ein Eilverfahren zu beginnen. Ein Eilverfahren ist ein Verfahren bei Gericht. Es ist für die Fälle da, in denen es besonders schnell gehen muss. Häufig läuft ein Eilverfahren parallel zu einem anderen Schritt ab. Das liegt daran, dass der eigentlich nächste Schritt manchmal zu lange dauert. Behörden brauchen zum Beispiel manchmal mehrere Monate für eine Entscheidung. Gerichte brauchen bei Klagen sogar manchmal mehr als ein Jahr. Wenn du aber zum Beispeil dringend Geld von der Behörde benötigst, kannst du so lange nicht warten. Deshalb gibt es das Eilverfahren. 

Und das beginnt mit dem Antrag auf einstweilige Anordnung. Der Antrag auf einstweilige Anordnung ist ein Schreiben an das Gericht, in dem steht, dass das Gericht in einem schnellen Verfahren über deinen Fall entscheiden soll. **Bitte vergiss deine Unterschrift am Ende des Schreibens nicht!** Nachdem du den Antrag auf einstweilige Anordnung an das Gericht geschickt hast, können zwei Sachen passieren: 

1. Das Gericht kann den Antrag ablehnen, weil es nicht findet, dass dein Fall eilig ist. Dann musst du doch auf die Entscheidung der Behörde warten.

2.  Oder das Gericht setzt einen Termin fest, in dem dein Fall besprochen wird. Zu diesem Termin im Gericht solltest du hingehen, weil du dort noch mal die Chance hast, alle Details zu deinem Fall zu erklären. Bei dem Termin wird eine Richterin oder ein Richter sein und meistens (aber nicht immer) eine Person von der Behörde. In dem Termin wird geklärt, ob du die gewünschte Leistung bekommst oder nicht.

**Auch wenn eine Situation bei Gericht immer aufregend ist, brauchst du keine Angst davor zu haben. Jeder in Deutschland ist berechtigt, sein Recht durchzusetzen. Egal ob das Gericht am Ende in deinem Sinne entscheidet oder nicht.**

Nach dem Termin bei Gericht trifft das Gericht eine Entscheidung. Entweder es entscheidet, dass die Behörde dir die Leistung zu dem gewünschten Zeitpunkt gewähren muss. Daran muss die Behörde sich dann halten. Oder es entscheidet, dass die Behörde recht hat und du die Leistung nicht zu dem gewünschten Zeitpunkt bekommst.  

    % else:
**Wir empfehlen, eine *Untätigkeitsklage* zu erheben.**  

Drucke dafür das beigefügte Dokument aus und sende es an die im Dokument angegebene Stelle.  

**Hinweise:**

1. Sende Dokumente per Einwurfeinschreiben. So kannst du später nachweisen, ob und wann dein Schreiben zugestellt wurde.
2. Sende die Dokumente **nicht** per Mail, denn dein Schreiben muss eigenhändig unterschrieben sein. Das nennt man Schriftform-Erfordernis.
3. **Vergiss nicht, die Dokumente zu unterschreiben!**

[PAGEBREAK]

[BOLDCENTER]\fontsize{16}{18}\selectfont Eine Untätigkeitsklage, was ist das?

Eine Untätigkeitsklage ist ein Verfahren bei Gericht. Es ist für die Fälle da, in denen die Behörde *untätig* ist, also in denen die Behörde nicht reagiert hat.  

Die Untätigkeitsklage ist ein Schreiben an das Gericht, in dem steht, dass das Gericht die Behörde dazu verpflichten soll, dir die benötigte Leistung zu gewähren. **Bitte vergiss deine Unterschrift am Ende des Schreibens nicht!** Nachdem du die Untätigkeitsklage an das Gericht geschickt hast, können zwei Sachen passieren: 

1. Das Gericht kann die Klage als unzulässig ablehnen, weil die Voraussetzungen für eine Untätigkeitsklage nicht vorliegen. Das kann verschiedene Gründe haben.

2.  Oder das Gericht setzt einen Termin fest, in dem dein Fall besprochen wird. Zu diesem Termin im Gericht solltest du hingehen, weil du dort noch mal die Chance hast, alle Details zu deinem Fall zu erklären. Bei dem Termin wird eine Richterin oder ein Richter sein und meistens (aber nicht immer) eine Person von der Behörde. In dem Termin wird geklärt, ob das Gericht die Behörde zu der gewünschten Leistung verpflichtet oder nicht.

**Auch wenn eine Situation bei Gericht immer aufregend ist, brauchst du keine Angst davor zu haben. Jeder in Deutschland ist berechtigt, sein Recht durchzusetzen. Egal ob das Gericht am Ende in deinem Sinne entscheidet oder nicht.**

Nach dem Termin bei Gericht trifft das Gericht eine Entscheidung. Wenn deine Untätigkeitsklage Erfolg hat, verpflichtet das Gericht die Behörde zu der gewünschten Leistung. Wenn deine Klage keinen Erfolg hat, wird die Klage abgewiesen, die Behörde muss die Leistung also nicht gewähren.  

    % endif
  % endif
% elif verfahren.status == "widerspruchsbescheid":  
  % if not verfahren.frist_abgelaufen:
    % if verfahren.antrag.eilverfahren == True:
**Wir empfehlen, *Klage* zu erheben. Wir empfehlen zudem, einen *Antrag auf einstweilige Anordnung* zu stellen, denn du hast angegeben, dass du die Leistung bereits ab dem ${ verfahren.antrag.leistung_ab_wann } benötigst.**  

Drucke dafür die beigefügten Dokument aus und sende sie an die in den Dokumenten angegebenen Stellen.  

**Hinweise:**

1. Sende Dokumente per Einwurfeinschreiben. So kannst du später nachweisen, ob und wann dein Schreiben zugestellt wurde.
2. Sende die Dokumente **nicht** per Mail, denn dein Schreiben muss eigenhändig unterschrieben sein. Das nennt man Schriftform-Erfordernis.
3. **Vergiss nicht, die Dokumente zu unterschreiben!**

[PAGEBREAK]

[BOLDCENTER]\fontsize{16}{18}\selectfont Eine Klage, was ist das?

Eine Klage ist ein Verfahren bei Gericht. Es ist für die Fälle da, in denen du mit der Entscheidung einer Behörde nicht einverstanden bist und keine Klärung mit der Behörde möglich war.  

Die Klage ist ein Schreiben an das Gericht, in dem steht, dass das Gericht die bisherigen Entscheidungen der Behörde aufheben soll und die Behörde dazu verpflichten soll, dir die benötigte Leistung zu gewähren. **Bitte vergiss deine Unterschrift am Ende des Schreibens nicht!** Nachdem du die Klage an das Gericht geschickt hast, können zwei Sachen passieren: 

1. Das Gericht kann die Klage als unzulässig ablehnen, weil die Voraussetzungen nicht vorliegen. Das kann verschiedene Gründe haben.

2.  Oder das Gericht setzt einen Termin fest, in dem dein Fall besprochen wird. Zu diesem Termin im Gericht solltest du hingehen, weil du dort noch mal die Chance hast, alle Details zu deinem Fall zu erklären. Bei dem Termin wird eine Richterin oder ein Richter sein und meistens (aber nicht immer) eine Person von der Behörde. In dem Termin wird geklärt, ob das Gericht die Behörde zu der gewünschten Leistung verpflichtet oder nicht.

**Auch wenn eine Situation bei Gericht immer aufregend ist, brauchst du keine Angst davor zu haben. Jeder in Deutschland ist berechtigt, sein Recht durchzusetzen. Egal ob das Gericht am Ende in deinem Sinne entscheidet oder nicht.**

Am Ende trifft das Gericht eine Entscheidung. Wenn deine Klage Erfolg hat, werden die bisherigen Entscheidungen der Behörde aufgehoben und das Gericht verpflichtet die Behörde zu der gewünschten Leistung. Wenn deine Klage keinen Erfolg hat, wird die Klage abgewiesen, die Behörde muss die Leistung also nicht gewähren.  

[BOLDCENTER]\fontsize{16}{18}\selectfont Ein Antrag auf einstweilige Anordnung, was ist das?

Ein Antrag auf einstweilige Anordnung ist der Schritt um ein Eilverfahren zu beginnen. Ein Eilverfahren ist ein Verfahren bei Gericht. Es ist für die Fälle da, in denen es besonders schnell gehen muss. Häufig läuft ein Eilverfahren parallel zu einem anderen Schritt ab. Das liegt daran, dass der eigentlich nächste Schritt manchmal zu lange dauert. Behörden brauchen zum Beispiel manchmal mehrere Monate für eine Entscheidung. Gerichte brauchen bei Klagen sogar manchmal mehr als ein Jahr. Wenn du aber zum Beispeil dringend Geld von der Behörde benötigst, kannst du so lange nicht warten. Deshalb gibt es das Eilverfahren. 

Und das beginnt mit dem Antrag auf einstweilige Anordnung. Der Antrag auf einstweilige Anordnung ist ein Schreiben an das Gericht, in dem steht, dass das Gericht in einem schnellen Verfahren über deinen Fall entscheiden soll. **Bitte vergiss deine Unterschrift am Ende des Schreibens nicht!** Nachdem du den Antrag auf einstweilige Anordnung an das Gericht geschickt hast, können zwei Sachen passieren: 

1. Das Gericht kann den Antrag ablehnen, weil es nicht findet, dass dein Fall eilig ist. Dann musst du doch auf die Entscheidung der Behörde warten.

2.  Oder das Gericht setzt einen Termin fest, in dem dein Fall besprochen wird. Zu diesem Termin im Gericht solltest du hingehen, weil du dort noch mal die Chance hast, alle Details zu deinem Fall zu erklären. Bei dem Termin wird eine Richterin oder ein Richter sein und meistens (aber nicht immer) eine Person von der Behörde. In dem Termin wird geklärt, ob du die gewünschte Leistung bekommst oder nicht.

**Auch wenn eine Situation bei Gericht immer aufregend ist, brauchst du keine Angst davor zu haben. Jeder in Deutschland ist berechtigt, sein Recht durchzusetzen. Egal ob das Gericht am Ende in deinem Sinne entscheidet oder nicht.**

Nach dem Termin bei Gericht trifft das Gericht eine Entscheidung. Entweder es entscheidet, dass die Behörde dir die Leistung zu dem gewünschten Zeitpunkt gewähren muss. Daran muss die Behörde sich dann halten. Oder es entscheidet, dass die Behörde recht hat und du die Leistung nicht zu dem gewünschten Zeitpunkt bekommen.  

    % else:
**Wir empfehlen, *Klage* zu erheben.**  

Drucke dafür das beigefügte Dokument aus und sende es an die im Dokument angegebene Stelle.  

**Hinweise:**

1. Sende Dokumente per Einwurfeinschreiben. So kannst du später nachweisen, ob und wann dein Schreiben zugestellt wurde.
2. Sende die Dokumente **nicht** per Mail, denn dein Schreiben muss eigenhändig unterschrieben sein. Das nennt man Schriftform-Erfordernis.
3. **Vergiss nicht, die Dokumente zu unterschreiben!**

[PAGEBREAK]

[BOLDCENTER]\fontsize{16}{18}\selectfont Eine Klage, was ist das?

Eine Klage ist ein Verfahren bei Gericht. Es ist für die Fälle da, in denen du mit der Entscheidung einer Behörde nicht einverstanden bist und keine Klärung mit der Behörde möglich war.  

Die Klage ist ein Schreiben an das Gericht, in dem steht, dass das Gericht die bisherigen Entscheidungen der Behörde aufheben soll und die Behörde dazu verpflichten soll, dir die benötigte Leistung zu gewähren. **Bitte vergiss deine Unterschrift am Ende des Schreibens nicht!** Nachdem du die Klage an das Gericht geschickt hast, können zwei Sachen passieren: 

1. Das Gericht kann die Klage als unzulässig ablehnen, weil die Voraussetzungen nicht vorliegen. Das kann verschiedene Gründe haben.

2.  Oder das Gericht setzt einen Termin fest, in dem dein Fall besprochen wird. Zu diesem Termin im Gericht solltest du hingehen, weil du dort noch mal die Chance hast, alle Details zu deinem Fall zu erklären. Bei dem Termin wird eine Richterin oder ein Richter sein und meistens (aber nicht immer) eine Person von der Behörde. In dem Termin wird geklärt, ob das Gericht die Behörde zu der gewünschten Leistung verpflichtet oder nicht.

**Auch wenn eine Situation bei Gericht immer aufregend ist, brauchst du keine Angst davor zu haben. Jeder in Deutschland ist berechtigt, sein Recht durchzusetzen. Egal ob das Gericht am Ende in deinem Sinne entscheidet oder nicht.**

Am Ende trifft das Gericht eine Entscheidung. Wenn deine Klage Erfolg hat, werden die bisherigen Entscheidungen der Behörde aufgehoben und das Gericht verpflichtet die Behörde zu der gewünschten Leistung. Wenn deine Klage keinen Erfolg hat, wird die Klage abgewiesen, die Behörde muss die Leistung also nicht gewähren.
    % endif
  % else:
**Die Klagefrist ist abgelaufen. Wir empfehlen, einen **Überprüfungsantrag** zu stellen.**   


Drucke dafür das beigefügte Dokument aus und sende es an die im Dokument angegebene Stelle.  

**Hinweise:**

1. Sende Dokumente per Einwurfeinschreiben. So kannst du später nachweisen, ob und wann dein Schreiben zugestellt wurde.
2. Sende die Dokumente **nicht** per Mail, denn dein Schreiben muss eigenhändig unterschrieben sein. Das nennt man Schriftform-Erfordernis.
3. **Vergiss nicht, die Dokumente zu unterschreiben!**

[PAGEBREAK]

[BOLDCENTER]\fontsize{16}{18}\selectfont Ein Überprüfungsantrag, was ist das?  

Ein Überprüfungsantrag ist die Forderung an eine Behörde, eine Entscheidung nocheinmal zu prüfen. Ein Überprüfungsantrag macht immmer dann Sinn, wenn die Frist für einen Widerspruch oder eine Klage schon abgelaufen ist. Ein Überprüfungsantrag wird von der Behörde bearbeitet, die die vorherige Entscheidung getroffen hat. 

Findet die Behörde Fehler in der Entscheidung, so ändert sie die Entscheidung. 
Ein Überprüfungsantrag ist ein besonderer Schritt, den es nur im Sozialrecht gibt, also etwa dann, wenn es um Sozialleistungen geht.  

  % endif
% elif verfahren.status == "klage":
  % if verfahren.antrag.eilverfahren == True:
**Du hast angegeben, dass du die Leistung bereits ab dem ${ verfahren.antrag.leistung_ab_wann } benötigst. Wir empfehlen daher, einen **Antrag auf einstweilige Anordnung** zu stellen.**  

Drucke dafür das beigefügte Dokument aus und sende es an die im Dokument angegebene Stelle.  

**Hinweise:**

1. Sende Dokumente per Einwurfeinschreiben. So kannst du später nachweisen, ob und wann dein Schreiben zugestellt wurde.
2. Sende die Dokumente **nicht** per Mail, denn dein Schreiben muss eigenhändig unterschrieben sein. Das nennt man Schriftform-Erfordernis.
3. **Vergiss nicht, die Dokumente zu unterschreiben!**

[PAGEBREAK]

[BOLDCENTER]\fontsize{16}{18}\selectfont Ein Antrag auf einstweilige Anordnung, was ist das?

Ein Antrag auf einstweilige Anordnung ist der Schritt um ein Eilverfahren zu beginnen. Ein Eilverfahren ist ein Verfahren bei Gericht. Es ist für die Fälle da, in denen es besonders schnell gehen muss. Häufig läuft ein Eilverfahren parallel zu einem anderen Schritt ab. Das liegt daran, dass der eigentlich nächste Schritt manchmal zu lange dauert. Behörden brauchen zum Beispiel manchmal mehrere Monate für eine Entscheidung. Gerichte brauchen bei Klagen sogar manchmal mehr als ein Jahr. Wenn du aber zum Beispeil dringend Geld von der Behörde benötigst, kannst du so lange nicht warten. Deshalb gibt es das Eilverfahren. 

Und das beginnt mit dem Antrag auf einstweilige Anordnung. Der Antrag auf einstweilige Anordnung ist ein Schreiben an das Gericht, in dem steht, dass das Gericht in einem schnellen Verfahren über deinen Fall entscheiden soll. **Bitte vergiss deine Unterschrift am Ende des Schreibens nicht!** Nachdem du den Antrag auf einstweilige Anordnung an das Gericht geschickt hast, können zwei Sachen passieren: 

1. Das Gericht kann den Antrag ablehnen, weil es nicht findet, dass dein Fall eilig ist. Dann musst du doch auf die Entscheidung der Behörde warten.

2.  Oder das Gericht setzt einen Termin fest, in dem dein Fall besprochen wird. Zu diesem Termin im Gericht solltest du hingehen, weil du dort noch mal die Chance hast, alle Details zu deinem Fall zu erklären. Bei dem Termin wird eine Richterin oder ein Richter sein und meistens (aber nicht immer) eine Person von der Behörde. In dem Termin wird geklärt, ob du die gewünschte Leistung bekommst oder nicht.

**Auch wenn eine Situation bei Gericht immer aufregend ist, brauchst du keine Angst davor zu haben. Jeder in Deutschland ist berechtigt, sein Recht durchzusetzen. Egal ob das Gericht am Ende in deinem Sinne entscheidet oder nicht.**

Nach dem Termin bei Gericht trifft das Gericht eine Entscheidung. Entweder es entscheidet, dass die Behörde dir die Leistung zu dem gewünschten Zeitpunkt gewähren muss. Daran muss die Behörde sich dann halten. Oder es entscheidet, dass die Behörde recht hat und du die Leistung nicht zu dem gewünschten Zeitpunkt bekommen.
  % else:
Aktuell kannst du keine weiteren Schritte vornehmen. Du musst abwarten, wie das Gericht über die Klage entscheidet.
  % endif
% endif

[PAGEBREAK]

${ infotext_leistung }