import displayNumber from './modules/displayNumber';
import menu from './modules/menu';
import maskInput from './modules/maskInput';
import linkPrivacy from './modules/linkPrivacy';
import clue from './modules/popUpClue';
import sendForm from './modules/sendForm';
import sliderClue from './modules/sliderClue';
import repairTabs from './modules/repairTabs';
import repairSlider from './modules/repairSlide';
import portfolioSlider from './modules/portfolioSlider';
import mobilePortfolio from './modules/portfolioSliderMobile';
import popUpPortfolio from './modules/popUpPortfolio';
import transparency from './modules/transparency';
import consult from './modules/consultation';
import reviewSlider from './modules/reviewSlider';
import accordion from './modules/accordion';
import table from './modules/tablePopUp';

displayNumber();
menu();
maskInput();
linkPrivacy();
clue();
sliderClue();
repairTabs();
repairSlider();
portfolioSlider();
mobilePortfolio();
popUpPortfolio();
transparency();
consult();
reviewSlider();
accordion();
table();
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
