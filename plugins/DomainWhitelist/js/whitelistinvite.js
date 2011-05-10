// XXX: Should I do crazy SN.X.Y.Z.A namespace instead?
var SN_WHITELIST = SN_WHITELIST || {};

SN_WHITELIST.updateButtons = function() {
    var lis = $('ul > li > input[name^="username[]"]');
    if (lis.length === 1) {
        $("ul > li > a.remove_row").hide();
    } else {
        $("ul > li > a.remove_row:first").show();
    }
};

SN_WHITELIST.resetRow = function(row) {
    $("input", row).val('');
    // Make sure the default domain is the first selection
    $("select option:first", row).val();
    $("a.remove_row", row).show();
};

SN_WHITELIST.addRow = function() {
    var row = $(this).closest("li");
    var newRow = row.clone();
    SN_WHITELIST.resetRow(newRow);
        $(newRow).insertAfter(row).show("blind", "slow", function() {
            SN_WHITELIST.updateButtons();
        });
};

SN_WHITELIST.removeRow = function() {
    $(this).closest("li").hide("blind", "slow", function() {
        $(this).remove();
        SN_WHITELIST.updateButtons();
    });
};

$(document).ready(function() {
    $('.add_row').live('click', SN_WHITELIST.addRow);
    $('.remove_row').live('click', SN_WHITELIST.removeRow);
});
