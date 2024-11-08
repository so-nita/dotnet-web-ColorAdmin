/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'de-ch' ]: { dictionary, getPluralForm } } = {"de-ch":{"dictionary":{"Numbered List":"Nummerierte Liste","Bulleted List":"Aufzählungsliste","To-do List":"Aufgabenliste","Bulleted list styles toolbar":"Darstellung der ungeordneten Liste","Numbered list styles toolbar":"Darstellung der nummerierten Liste","Toggle the disc list style":"Gefüllten Kreis einstellen","Toggle the circle list style":"Leeren Kreis einstellen","Toggle the square list style":"Quadrat einstellen","Toggle the decimal list style":"Dezimalzahlen einstellen","Toggle the decimal with leading zero list style":"Dezimalzahlen mit vorangestellten Nullen einstellen","Toggle the lower–roman list style":"Kleingeschriebene römische Zahlen einstellen","Toggle the upper–roman list style":"Grossgeschriebene römische Zahlen einstellen","Toggle the lower–latin list style":"Kleingeschriebene lateinische Buchstaben einstellen","Toggle the upper–latin list style":"Grossgeschriebene lateinische Buchstaben einstellen","Disc":"Gefüllter Kreis","Circle":"Leerer Kreis","Square":"Quadrat","Decimal":"Dezimalzahlen","Decimal with leading zero":"Dezimalzahlen mit vorangestellten Nullen","Lower–roman":"Kleingeschriebene römische Zahlen","Upper-roman":"Grossgeschriebene römische Zahlen","Lower-latin":"Kleingeschriebene lateinische Buchstaben","Upper-latin":"Grossgeschriebene lateinische Buchstaben","List properties":"","Start at":"","Invalid start index value.":"","Start index must be greater than 0.":"","Reversed order":"","Keystrokes that can be used in a list":"","Increase list item indent":"","Decrease list item indent":"","Entering a to-do list":"","Leaving a to-do list":""},getPluralForm(n){return (n != 1);}}};
e[ 'de-ch' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'de-ch' ].dictionary = Object.assign( e[ 'de-ch' ].dictionary, dictionary );
e[ 'de-ch' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
