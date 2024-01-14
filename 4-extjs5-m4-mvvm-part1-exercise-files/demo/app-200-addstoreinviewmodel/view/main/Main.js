/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TabletApp.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
      'TabletApp.view.sessiondetail.SessionDetail',
      'TabletApp.view.sessionlist.SessionList',
      'TabletApp.view.main.MainController'
    ],

    xtype: 'app-main',

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [
        {
            region: 'center',
            xtype: 'sessionlist',
            split: true,
            flex: 5
        },
        {
            region: 'east',
            xtype: 'sessiondetail',
            split: true,
            flex: 2
        }
    ]
});
