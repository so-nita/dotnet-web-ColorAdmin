/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'hi' ]: { dictionary, getPluralForm } } = {"hi":{"dictionary":{"Numbered List":"Numbered List","Bulleted List":"Bulleted List","To-do List":"To-do List","Bulleted list styles toolbar":"Bulleted list styles toolbar","Numbered list styles toolbar":"Numbered list styles toolbar","Toggle the disc list style":"Toggle the disc list style","Toggle the circle list style":"Toggle the circle list style","Toggle the square list style":"Toggle the square list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the upper–roman list style":"Toggle the upper–roman list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Disc":"Disc","Circle":"Circle","Square":"Square","Decimal":"Decimal","Decimal with leading zero":"Decimal with leading zero","Lower–roman":"Lower–roman","Upper-roman":"Upper-roman","Lower-latin":"Lower-latin","Upper-latin":"Upper-latin","List properties":"प्रॉपर्टीज़ को लिस्ट करें","Start at":"शुरू करे इस पर","Invalid start index value.":"इनवैलिड स्टार्ट इंडेक्स वैल्यू.","Start index must be greater than 0.":"स्टार्ट इंडेक्स 0 से अधिक होना चाहिए.","Reversed order":"रिवर्स किया गया क्रम","Keystrokes that can be used in a list":"वे कीस्ट्रोक्स जिनका इस्तेमाल किसी लिस्ट में किया जा सकता है","Increase list item indent":"लिस्ट आइटम इंडेंट को बढ़ाएँ","Decrease list item indent":"लिस्ट आइटम इंडेंट को घटाएँ","Entering a to-do list":"एक कार्य सूची में प्रवेश कर रहे हैं","Leaving a to-do list":"एक कार्य सूची छोड़ी जा रही है"},getPluralForm(n){return (n != 1);}}};
e[ 'hi' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'hi' ].dictionary = Object.assign( e[ 'hi' ].dictionary, dictionary );
e[ 'hi' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
