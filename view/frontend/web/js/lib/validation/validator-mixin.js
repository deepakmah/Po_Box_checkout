/**
 * @copyright Copyright (c) sbdevblog (http://www.sbdevblog.com)
 */
define([
    'jquery',
], function ($) {
    'use strict';

    return function (validator) {

        validator.addRule(
            'pobox-validation',
            function (value) {
                // ✅ Use only your improved PO Box regex here
                let isValidPoBox = /\b(P[\s\.\-_]*O[\s\.\-_]*(Box|BX|Boxes|Boxx|Box\s*\d*|box|poboxx?)|pobox[\s\.\-_]*\d*|po[\s\.\-_]*box[\s\.\-_]*(\d+|x*)|\bP\.?\s*O\.?\s*Box\s*\d*)\b/i.test(value);

                return !isValidPoBox; // Block if PO Box detected
            },
            $.mage.__("PO BOX address not allowed")
        );

        return validator;
    };
});
