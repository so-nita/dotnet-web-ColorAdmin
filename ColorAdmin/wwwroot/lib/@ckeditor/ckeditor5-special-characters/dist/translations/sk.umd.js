/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'sk' ]: { dictionary, getPluralForm } } = {"sk":{"dictionary":{"Special characters":"Špeciálne znaky","All":"Všetko","Arrows":"Šípky","Currency":"Mena","Latin":"Latinský","Mathematical":"Matematický","Text":"Text","leftwards simple arrow":"jednoduchá šípka doľava","rightwards simple arrow":"jednoduchá šípka doprava","upwards simple arrow":"jednoduchá šípka nahor","downwards simple arrow":"jednoduchá šípka nadol","leftwards double arrow":"dvojitá šípka doľava","rightwards double arrow":"dvojitá šípka doprava","upwards double arrow":"dvojitá šípka nahor","downwards double arrow":"dvojitá šípka nadol","leftwards dashed arrow":"prerušovaná šípka doľava","rightwards dashed arrow":"čiarkovaná šípka doprava","upwards dashed arrow":"čiarkovaná šípka nahor","downwards dashed arrow":"prerušovaná šípka nadol","leftwards arrow to bar":"šípka doľava do zvislej čiary","rightwards arrow to bar":"šípka doprava do zvislej čiary","upwards arrow to bar":"šípka nahor do zvislej čiary","downwards arrow to bar":"šípka nadol do zvislej čiary","up down arrow with base":"Šípka hore-dole od základne","back with leftwards arrow above":"Šípka späť","end with leftwards arrow above":"Šípka koniec","on with exclamation mark with left right arrow above":"ON s výkričníkom so šípkou doľava doprava hore","soon with rightwards arrow above":"čoskoro so šípkou doprava hore","top with upwards arrow above":"TOP so šípkou hore","Dollar sign":"Znak Dolár","Euro sign":"Znak Euro","Yen sign":"Znak Jen","Pound sign":"Znak Libra","Cent sign":"Znak cent","Euro-currency sign":"Mena Euro","Colon sign":"Dvojbodka","Cruzeiro sign":"Mena Cruzeiro","French franc sign":"Mena Francúzsky Frank","Lira sign":"Mena Líra","Currency sign":"Znak meny","Bitcoin sign":"Mena Bitcoin","Mill sign":"Znak Mill","Naira sign":"Znak Naira","Peseta sign":"Znak Peseta","Rupee sign":"Znak Rupee","Won sign":"Znak Won","New sheqel sign":"Nový znak šekelu","Dong sign":"Znak Dong","Kip sign":"Znak Kip","Tugrik sign":"Znak Tugrik","Drachma sign":"Znak Drachma","German penny sign":"Nemecká penny","Peso sign":"Znak Peso","Guarani sign":"Znak Guarani","Austral sign":"Znak Austral","Hryvnia sign":"Znak Hryvnia","Cedi sign":"Znak Cedi","Livre tournois sign":"Znak Livre tournois","Spesmilo sign":"Znak Spesmilo","Tenge sign":"Znak Tenge","Indian rupee sign":"Znak Indická rupia","Turkish lira sign":"Znak Turecká líra","Nordic mark sign":"Znak Nórska marka","Manat sign":"Znak Manat","Ruble sign":"Znak Ruble","Latin capital letter a with macron":"Latinské veľké písmeno a s čiarou","Latin small letter a with macron":"Latinské malé písmeno a s čiarou","Latin capital letter a with breve":"Latinské veľké písmeno a s mäkčeňom","Latin small letter a with breve":"Latinské malé písmeno a s mäkčeňom","Latin capital letter a with ogonek":"Latinské veľké písmeno a s háčikom","Latin small letter a with ogonek":"Latinské malé písmeno a s háčikom","Latin capital letter c with acute":"Latinské veľké písmeno c s dĺžňom","Latin small letter c with acute":"Latinské malé písmeno c s dĺžňom","Latin capital letter c with circumflex":"Latinské veľké písmeno c s obráteným mäkčeňom","Latin small letter c with circumflex":"Latinské malé písmeno c s obráteným mäkčeňom","Latin capital letter c with dot above":"Latinské veľké písmeno c s bodkou nad znakom","Latin small letter c with dot above":"Latinské malé písmeno c s bodkou nad znakom","Latin capital letter c with caron":"Latinské veľké písmeno c s mäkčeňom","Latin small letter c with caron":"Latinské malé písmeno c s mäkčeňom","Latin capital letter d with caron":"Latinské veľké písmeno d s mäkčeňom","Latin small letter d with caron":"Latinské malé písmeno d s mäkčeňom","Latin capital letter d with stroke":"Latinské veľké písmeno d s prečiarknutím","Latin small letter d with stroke":"Latinské malé písmeno d s prečiarknutím","Latin capital letter e with macron":"Latinské veľké písmeno e s čiarou","Latin small letter e with macron":"Latinské malé písmeno e s čiarou","Latin capital letter e with breve":"Latinské veľké písmeno e s mäkčeňom","Latin small letter e with breve":"Latinské malé písmeno e s mäkčeňom","Latin capital letter e with dot above":"Latinské veľké písmeno e s bodkou nad znakom","Latin small letter e with dot above":"Latinské malé písmeno e s bodkou nad znakom","Latin capital letter e with ogonek":"Latinské veľké písmeno e s háčikom","Latin small letter e with ogonek":"Latinské malé písmeno e s háčikom","Latin capital letter e with caron":"Latinské veľké písmeno e s mäkčeňom","Latin small letter e with caron":"Latinské malé písmeno e s mäkčeňom","Latin capital letter g with circumflex":"Latinské veľké písmeno g s obráteným mäkčeňom","Latin small letter g with circumflex":"Latinské malé písmeno g s obráteným mäkčeňom","Latin capital letter g with breve":"Latinské veľké písmeno g s mäkčeňom","Latin small letter g with breve":"Latinské malé písmeno g s mäkčeňom","Latin capital letter g with dot above":"Latinské veľké písmeno g s bodkou nad znakom","Latin small letter g with dot above":"Latinské malé písmeno g s bodkou nad znakom","Latin capital letter g with cedilla":"Latinské veľké písmeno g s háčikom","Latin small letter g with cedilla":"Latinské malé písmeno g s háčikom","Latin capital letter h with circumflex":"Latinské veľké písmeno h s obráteným mäkčeňom","Latin small letter h with circumflex":"Latinské malé písmeno h s obráteným mäkčeňom","Latin capital letter h with stroke":"Latinské veľké písmeno h s prečiarknutím","Latin small letter h with stroke":"Latinské malé písmeno h s prečiarknutím","Latin capital letter i with tilde":"Latinské veľké písmeno i s vlnovkou","Latin small letter i with tilde":"Latinské malé písmeno i s vlnovkou","Latin capital letter i with macron":"Latinské veľké písmeno i s čiarou","Latin small letter i with macron":"Latinské malé písmeno i s čiarou","Latin capital letter i with breve":"Latinské veľké písmeno i s mäkčeňom","Latin small letter i with breve":"Latinské malé písmeno i s mäkčeňom","Latin capital letter i with ogonek":"Latinské veľké písmeno i s háčikom","Latin small letter i with ogonek":"Latinské malé písmeno i s háčikom","Latin capital letter i with dot above":"Latinské veľké písmeno i s bodkou nad znakom","Latin small letter dotless i":"Latinské malé písmeno i bez bodky","Latin capital ligature ij":"Latinský veľký znak ligatúry ij","Latin small ligature ij":"Latinský malý znak ligatúry ij","Latin capital letter j with circumflex":"Latinské veľké písmeno j s obráteným mäkčeňom","Latin small letter j with circumflex":"Latinské malé písmeno j s obráteným mäkčeňom","Latin capital letter k with cedilla":"Latinské veľké písmeno k s háčikom","Latin small letter k with cedilla":"Latinské malé písmeno k s háčikom","Latin small letter kra":"latinský malý znak Kra","Latin capital letter l with acute":"Latinské veľké písmeno l s dĺžňom","Latin small letter l with acute":"Latinské malé písmeno l s dĺžňom","Latin capital letter l with cedilla":"Latinské veľké písmeno l s háčikom","Latin small letter l with cedilla":"Latinské malé písmeno l s háčikom","Latin capital letter l with caron":"Latinské veľké písmeno l s mäkčeňom","Latin small letter l with caron":"Latinské malé písmeno l s mäkčeňom","Latin capital letter l with middle dot":"Latinské veľké písmeno l s bodkou uprostred","Latin small letter l with middle dot":"Latinské malé písmeno l s bodkou uprostred","Latin capital letter l with stroke":"Latinské veľké písmeno l s prečiarknutím","Latin small letter l with stroke":"Latinské malé písmeno l s prečiarknutím","Latin capital letter n with acute":"Latinské veľké písmeno n s dĺžňom","Latin small letter n with acute":"Latinské malé písmeno n s dĺžňom","Latin capital letter n with cedilla":"Latinské veľké písmeno n s háčikom","Latin small letter n with cedilla":"Latinské malé písmeno n s háčikom","Latin capital letter n with caron":"Latinské veľké písmeno n s mäkčeňom","Latin small letter n with caron":"Latinské malé písmeno n s mäkčeňom","Latin small letter n preceded by apostrophe":"Latinské malé písmeno n s apostrofom","Latin capital letter eng":"Latinské veľké písmeno Eng","Latin small letter eng":"Latinské malé písmeno Eng","Latin capital letter o with macron":"Latinské veľké písmeno o s čiarou","Latin small letter o with macron":"Latinské malé písmeno o s čiarou","Latin capital letter o with breve":"Latinské veľké písmeno o s mäkčeňom","Latin small letter o with breve":"Latinské malé písmeno o s mäkčeňom","Latin capital letter o with double acute":"Latinské veľké písmeno o s dĺžňom","Latin small letter o with double acute":"Latinské malé písmeno o s dĺžňom","Latin capital ligature oe":"Latinský veľký znak ligatúry oe","Latin small ligature oe":"Latinský malý znak ligatúry oe","Latin capital letter r with acute":"Latinské veľké písmeno r s dĺžňom","Latin small letter r with acute":"Latinské malé písmeno r s dĺžňom","Latin capital letter r with cedilla":"Latinské veľké písmeno r s háčikom","Latin small letter r with cedilla":"Latinské malé písmeno r s háčikom","Latin capital letter r with caron":"Latinské veľké písmeno r s mäkčeňom","Latin small letter r with caron":"Latinské malé písmeno r s mäkčeňom","Latin capital letter s with acute":"Latinské veľké písmeno s s dĺžňom","Latin small letter s with acute":"Latinské malé písmeno s s dĺžňom","Latin capital letter s with circumflex":"Latinské veľké písmeno s s obráteným mäkčeňom","Latin small letter s with circumflex":"Latinské malé písmeno s s obráteným mäkčeňom","Latin capital letter s with cedilla":"Latinské veľké písmeno s s háčikom","Latin small letter s with cedilla":"Latinské malé písmeno s s háčikom","Latin capital letter s with caron":"Latinské veľké písmeno s s mäkčeňom","Latin small letter s with caron":"Latinské malé písmeno s s mäkčeňom","Latin capital letter t with cedilla":"Latinské veľké písmeno t s háčikom","Latin small letter t with cedilla":"Latinské malé písmeno t s háčikom","Latin capital letter t with caron":"Latinské veľké písmeno t s mäkčeňom","Latin small letter t with caron":"Latinské malé písmeno t s mäkčeňom","Latin capital letter t with stroke":"Latinské veľké písmeno t s prečiarknutím","Latin small letter t with stroke":"Latinské malé písmeno t s prečiarknutím","Latin capital letter u with tilde":"Latinské veľké písmeno u s vlnovkou","Latin small letter u with tilde":"Latinské malé písmeno u s vlnovkou","Latin capital letter u with macron":"Latinské veľké písmeno u s čiarou","Latin small letter u with macron":"Latinské malé písmeno o s čiarou","Latin capital letter u with breve":"Latinské veľké písmeno u s mäkčeňom","Latin small letter u with breve":"Latinské malé písmeno u s mäkčeňom","Latin capital letter u with ring above":"Latinské veľké písmeno u s krúžkom nad znakom","Latin small letter u with ring above":"Latinské malé písmeno u s krúžkom nad znakom","Latin capital letter u with double acute":"Latinské veľké písmeno u s dvojitým dĺžňom","Latin small letter u with double acute":"Latinské malé písmeno u s dvojitým dĺžňom","Latin capital letter u with ogonek":"Latinské veľké písmeno u s háčikom","Latin small letter u with ogonek":"Latinské malé písmeno u s háčikom","Latin capital letter w with circumflex":"Latinské veľké písmeno w s obráteným mäkčeňom","Latin small letter w with circumflex":"Latinské malé písmeno w s obráteným mäkčeňom","Latin capital letter y with circumflex":"Latinské veľké písmeno y s obráteným mäkčeňom","Latin small letter y with circumflex":"Latinské malé písmeno y s obráteným mäkčeňom","Latin capital letter y with diaeresis":"Latinské veľké písmeno y s dvojbodkou nad znakom","Latin capital letter z with acute":"Latinské veľké písmeno z s dĺžňom","Latin small letter z with acute":"Latinské malé písmeno z s dĺžňom","Latin capital letter z with dot above":"Latinské veľké písmeno z s bodkou nad znakom","Latin small letter z with dot above":"Latinské malé písmeno z s bodkou nad znakom","Latin capital letter z with caron":"Latinské veľké písmeno z s mäkčeňom","Latin small letter z with caron":"Malé písmeno s z mäkčeňom","Latin small letter long s":"Malé dlhé písmeno s","Less-than sign":"Menší ako","Greater-than sign":"Väčší ako","Less-than or equal to":"Menší alebo rovný","Greater-than or equal to":"Väčší alebo rovný","En dash":"Pomĺčka","Em dash":"Dlhá pomĺčka","Macron":"Horná čiara","Overline":"Preškrtnutie","Degree sign":"Znak stupeň","Minus sign":"Znak mínus","Plus-minus sign":"Znak plus-mínus","Division sign":"Delenie","Fraction slash":"Lomítko / Delenie","Multiplication sign":"Násobenie","Latin small letter f with hook":"Funkcia","Integral":"Integrál","N-ary summation":"Znak cyklického sčítania","Infinity":"Nekonečno","Square root":"Odmocnina","Tilde operator":"Vlnovka","Approximately equal to":"Aproximácia","Almost equal to":"Čiastočne rovný","Not equal to":"Nerovná sa","Identical to":"Identický k","Element of":"Patrí / Je súčasťou","Not an element of":"Nepatrí / Nie je súčasťou","Contains as member":"Obsahuje prvok","N-ary product":"Znak cyklického násobenia","Logical and":"Logický AND","Logical or":"Logický OR","Not sign":"Nie je rovný","Intersection":"Priesečník / Prienik","Union":"Zjednotenie","Partial differential":"Parciálna diferencia","For all":"Pre všetky prvky v množine","There exists":"Existuje v množine","Empty set":"Prázdna množina","Nabla":"Nabla","Asterisk operator":"Hviezdička / násobenie","Proportional to":"Úmerný k","Angle":"Uhol","Vulgar fraction one quarter":"Jedna štvrtina","Vulgar fraction one half":"Polovica","Vulgar fraction three quarters":"Tri štvrtiny","Single left-pointing angle quotation mark":"Šípka ukazujúca doľava","Single right-pointing angle quotation mark":"Šípka ukazujúca doprava","Left-pointing double angle quotation mark":"Dvojitá šípka ukazujúca doľava","Right-pointing double angle quotation mark":"Dvojitá šípka ukazujúca doprava","Left single quotation mark":"Ľavá uvodzovka","Right single quotation mark":"Pravá uvodzovka","Left double quotation mark":"Ľavá dvojitá uvodzovka","Right double quotation mark":"Pravá dvojitá uvodzovka","Single low-9 quotation mark":"Spodná uvodzovka","Double low-9 quotation mark":"Dvojitá spodná uvodzovka","Inverted exclamation mark":"Obrátený výkričník","Inverted question mark":"Obrátený otáznik","Two dot leader":"Horizontálna dvojbodka","Horizontal ellipsis":"Trojbodka","Double dagger":"Dvojkríž","Per mille sign":"Promile","Per ten thousand sign":"Na desaťtisíc","Double exclamation mark":"Dvojitý výkričník","Question exclamation mark":"Otáznik a výkričník","Exclamation question mark":"Výkričník a otáznik","Double question mark":"Dvojitý otáznik","Copyright sign":"Copyright","Registered sign":"Registrovaný","Trade mark sign":"Ochranná známka","Section sign":"Sekcia","Paragraph sign":"Odsek","Reversed paragraph sign":"Obrátený znak odseku","Character categories":"Kategórie znakov"},getPluralForm(n){return (n % 1 == 0 && n == 1 ? 0 : n % 1 == 0 && n >= 2 && n <= 4 ? 1 : n % 1 != 0 ? 2: 3);}}};
e[ 'sk' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'sk' ].dictionary = Object.assign( e[ 'sk' ].dictionary, dictionary );
e[ 'sk' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );