/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'pl' ]: { dictionary, getPluralForm } } = {"pl":{"dictionary":{"Rich Text Editor":"Edytor tekstu sformatowanego","Editor editing area: %0":"Obszar edycji edytora: %0","Edit block":"Edytuj blok","Click to edit block":"Kliknij, aby edytować blok","Drag to move":"Przeciągnij, aby przenieść","Next":"Następny","Previous":"Poprzedni","Editor toolbar":"Pasek narzędzi edytora","Dropdown toolbar":"Rozwijany pasek narzędzi","Black":"Czarny","Dim grey":"Ciemnoszary","Grey":"Szary","Light grey":"Jasnoszary","White":"Biały","Red":"Czerwony","Orange":"Pomarańczowy","Yellow":"Żółty","Light green":"Jasnozielony","Green":"Zielony","Aquamarine":"Akwamaryna","Turquoise":"Turkusowy","Light blue":"Jasnoniebieski","Blue":"Niebieski","Purple":"Purpurowy","Editor block content toolbar":"Pasek zadań treści blokowej edytora","Editor contextual toolbar":"Kontekstowy pasek zadań edytora","HEX":"SZESNASTKOWY","No results found":"Nie znaleziono wyników","No searchable items":"Brak elementów do wyszukania","Editor dialog":"Okno edytora","Close":"Zamknij","Help Contents. To close this dialog press ESC.":"Zawartość pomocy. Aby zamknąć to okno dialogowe, naciśnij klawisz ESC.","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"Poniżej znajdziesz listę skrótów klawiszowych, których można używać w edytorze.","(may require <kbd>Fn</kbd>)":"(może wymagać użycia klawisza <kbd>Fn</kbd>)","Accessibility":"Dostępność","Accessibility help":"Pomoc dotycząca dostępności","Press %0 for help.":"Naciśnij %0, aby uzyskać pomoc.","Move focus in and out of an active dialog window":"Przenosi fokus do i z aktywnego okna dialogowego","MENU_BAR_MENU_FILE":"Plik","MENU_BAR_MENU_EDIT":"Zmiana","MENU_BAR_MENU_VIEW":"Zobacz","MENU_BAR_MENU_INSERT":"Wstaw","MENU_BAR_MENU_FORMAT":"Format","MENU_BAR_MENU_TOOLS":"Narzędzia","MENU_BAR_MENU_HELP":"Pomoc","MENU_BAR_MENU_TEXT":"Tekst","MENU_BAR_MENU_FONT":"Czcionka","Editor menu bar":"Pasek menu edytora","Please enter a valid color (e.g. \"ff0000\").":"Wprowadź prawidłowy kolor (np. „ff0000”)."},getPluralForm(n){return (n==1 ? 0 : (n%10>=2 && n%10<=4) && (n%100<12 || n%100>14) ? 1 : n!=1 && (n%10>=0 && n%10<=1) || (n%10>=5 && n%10<=9) || (n%100>=12 && n%100<=14) ? 2 : 3);}}};
e[ 'pl' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'pl' ].dictionary = Object.assign( e[ 'pl' ].dictionary, dictionary );
e[ 'pl' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
