'use strict';

goog.require('Blockly.Msg');

Blockly.Msg.CONTROLS_IF_TOOLTIP_1 = pgettext('blockly', 'If a value is true, then do some statements.');
Blockly.Msg.CONTROLS_IF_TOOLTIP_2 = pgettext('blockly', 'If a value is true, then do the first block of statements. Otherwise, do the second block of statements.');
Blockly.Msg.CONTROLS_IF_TOOLTIP_3 = pgettext('blockly', 'If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.');
Blockly.Msg.CONTROLS_IF_TOOLTIP_4 = pgettext('blockly', 'If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.');

Blockly.Msg.CONTROLS_IF_MSG_IF = pgettext('blockly', 'if');
Blockly.Msg.CONTROLS_IF_MSG_ELSEIF = pgettext('blockly', 'else if');
Blockly.Msg.CONTROLS_IF_MSG_ELSE = pgettext('blockly', 'else');

Blockly.Msg.CONTROLS_IF_MSG_THEN = pgettext('blockly', 'do');
Blockly.Msg.CONTROLS_IF_IF_TITLE_IF = pgettext('blockly', 'if');

Blockly.Msg.LOGIC_NEGATE_TITLE = interpolate(pgettext('blockly', 'not %(input)s'), {input: '%1'}, true);
Blockly.Msg.LOGIC_NEGATE_TOOLTIP = pgettext('blockly', 'Returns true if the input is false. Returns false if the input is true.');

Blockly.Msg.CONTROLS_REPEAT_TITLE = interpolate(pgettext('blockly', 'repeat %(times)s times'), {times: '%1'}, true);
Blockly.Msg.CONTROLS_REPEAT_INPUT_DO = pgettext('blockly', 'do');
Blockly.Msg.CONTROLS_REPEAT_TOOLTIP = pgettext('blockly', 'Do some statements several times.');