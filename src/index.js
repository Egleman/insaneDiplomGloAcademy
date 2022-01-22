import displayNumber from './modules/displayNumber';
import menu from './modules/menu';
import maskInput from './modules/maskInput';
import linkPrivacy from './modules/linkPrivacy';
import clue from './modules/popUpClue';
import sendForm from './modules/sendForm';
import sliderClue from './modules/sliderClue';
import repairTabs from './modules/repairTabs';

displayNumber();
menu();
maskInput();
linkPrivacy();
clue();
sliderClue();
repairTabs();
sendForm({
    formID: 'feedback1',
});
sendForm({
    formID: 'feedback2',
});
sendForm({
    formID: 'feedback3',
});
sendForm({
    formID: 'feedback4',
});
sendForm({
    formID: 'feedback5',
});
sendForm({
    formID: 'feedback6',
});
