exports.statement = () => {
    return `<p>A common security method used for online banking is to ask the user for three random characters from a passcode. For example, if the passcode was 531278, they may ask for the 2nd, 3rd, and 5th characters; the expected reply would be: 317.</p>
<p>The text file, <a href="project/resources/p079_keylog.txt">keylog.txt</a>, contains fifty successful login attempts.</p>
<p>Given that the three characters are always asked for in order, analyse the file so as to determine the shortest possible secret passcode of unknown length.</p>`;
};

exports.solution = () => {
    return 0;
};