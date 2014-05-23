$(function () {
    $('.ui.sidebar').first().sidebar('attach events', '#showSidBtn');
    var handler;
    $('#showSidBtn').first().sidebar('attach events', '.styled.example .button');

    $('#showSidBtn').first().sidebar('attach events', '.floating.example .button');
});
