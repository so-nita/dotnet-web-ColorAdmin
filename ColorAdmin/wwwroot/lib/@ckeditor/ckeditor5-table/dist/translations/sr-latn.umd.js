/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'sr-latn' ]: { dictionary, getPluralForm } } = {"sr-latn":{"dictionary":{"Insert table":"Dodaj tabelu","Header column":"Kolona za zaglavlje","Insert column left":"Dodaj kolonu levo","Insert column right":"Dodaj kolonu desno","Delete column":"Briši kolonu","Select column":"Odaberi kolonu","Column":"Kolona","Header row":"Red za zaglavlje","Insert row below":"Dodaj red ispod","Insert row above":"Dodaj red iznad","Delete row":"Briši red","Select row":"Odaberi red","Row":"Red","Merge cell up":"Spoj ćelije na gore","Merge cell right":"Spoj ćelije na desno","Merge cell down":"Spoj ćelije na dole","Merge cell left":"Spoj ćelije na levo","Split cell vertically":"Deli ćelije uspravno","Split cell horizontally":"Deli ćelije vodoravno","Merge cells":"Spoj ćelije","Table toolbar":"Tabela traka sa alatkama","Table properties":"Svojstva tabele","Cell properties":"Svojstva ćelije","Border":"Granica","Style":"Stil","Width":"Širina","Height":"Visina","Color":"Boja","Background":"Pozadina","Padding":"Postavljanje","Dimensions":"Dimenzija","Table cell text alignment":"Poravnaj tekst u tabeli","Alignment":"Poravnanje","Horizontal text alignment toolbar":"Horizontalna traka sa alatkama za  poravnavanje teksta","Vertical text alignment toolbar":"Vertikalna traka sa alatkama za poravnavanje teksta","Table alignment toolbar":"Traka sa alatkama za poravnavanje tabele","None":"Nijedan","Solid":"Čvrst","Dotted":"Sa tačkama","Dashed":"Razbijeno","Double":"Dvostruki","Groove":"Kolosek","Ridge":"Greben","Inset":"Prilog","Outset":"Početak","Align cell text to the left":"Poravnajte tekst ćelije levo","Align cell text to the center":"Poravnajte tekst ćelije u sredinu","Align cell text to the right":"Poravnajte tekst ćelije desno","Justify cell text":"Opravdajte tekst ćelije","Align cell text to the top":"Poravnajte tekst ćelije prema gore","Align cell text to the middle":"Poravnajte tekst ćelije u sredinu","Align cell text to the bottom":"Poravnajte tekst ćelije prema dole","Align table to the left":"Poravnajte tabelu na levu stranu","Center table":"Centar tabele","Align table to the right":"Poravnajte tabelu na desnu stranu","The color is invalid. Try \"#FF0000\" or \"rgb(255,0,0)\" or \"red\".":"Boja je nevažeća. Pokušajte sa \"# FF0000\" ili \"rgb (255,0,0)\" ili \"crvena\".","The value is invalid. Try \"10px\" or \"2em\" or simply \"2\".":"Vrednost je nevažeća. Pokušajte sa „10pk“ ili „2em“ ili jednostavno „2“.","Color picker":"Birač boja","Enter table caption":"Unesite naslov tabele","Keystrokes that can be used in a table cell":"","Move the selection to the next cell":"","Move the selection to the previous cell":"","Insert a new table row (when in the last cell of a table)":"","Navigate through the table":"","Table":""},getPluralForm(n){return (n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);}}};
e[ 'sr-latn' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'sr-latn' ].dictionary = Object.assign( e[ 'sr-latn' ].dictionary, dictionary );
e[ 'sr-latn' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
