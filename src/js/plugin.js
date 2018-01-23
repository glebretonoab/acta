$(document).ready(function () {

    /* Select 2 plugin */
    $('.select2').select2();

    /* iCheck */
    $('input[type=checkbox]').iCheck({
        labelHover: false,
        cursor: true,
        checkboxClass: 'icheckbox_flat-blue'
    });

    /* Datatables.net */
    $('.dataTable-complete-1').DataTable({
        dom: "<'row'<'col-sm-6'l><'col-sm-6'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-5'p><'col-sm-7'B>>",
        buttons: [
            'selectAll',
            'selectNone',
            {
                text: '<i class="fa fa-pencil-square" aria-hidden="true"></i> Update scripts',
                action: function ( e, dt, node, config ) {
                    alert( 'Button activated' );
                }
            }
        ],
        select: true
    });

    $('.dataTable-complete-2').DataTable({
        dom: "<'row'<'col-sm-6'l><'col-sm-6'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-5'p><'col-sm-7'B>>",
        buttons: [
            'selectAll',
            'selectNone',
            {
                text: '<i class="fa fa-trash" aria-hidden="true"></i> Delete scripts',
                className: 'delete',
                action: function ( e, dt, node, config ) {
                    alert( 'Button activated' );
                }
            },
            {
                text: '<i class="fa fa-file-excel-o" aria-hidden="true"></i> Save in XLS / CSV',
                action: function ( e, dt, node, config ) {
                    alert( 'Button activated' );
                }
            }
        ],
        select: true,
        columnDefs: [
            { orderable: true, targets: [0, 1] },
            { orderable: false, targets: '_all' }
        ]
    });

    $('.dataTable-ligth').DataTable({
        dom: "t",
        columnDefs: [
            { orderable: true, targets: 1 },
            { orderable: false, targets: '_all' }
        ]
    });

    // Bootstrap Popover
    $('[data-toggle="popover"]').popover({
        html: true
    });

    // Bootstrap Datepicker
    $('.datepicker').datepicker({
        format: 'yyyy-mm-dd'
    });

    // Datatables
    $('.dataTable tbody').on('click', 'tr', function () {
        $(this).toggleClass('selected');
    });

    $('.launchscript').click(function () {
        console.log('ok ok');
        $('#tab_2_link').tab('show');
    });

    /*$('#button').click( function () {
        alert( table.rows('.selected').data().length +' row(s) selected' );
    } );*/
});