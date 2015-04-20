// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=392286
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    var timeoutId = null;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            tick();
            args.setPromise(WinJS.UI.processAll());
        }
    };
    function pad2(number) {
        return (number >= 10) ? number : "0" + number;
    }
    function pad4(number) {
        return (number >= 100) ? number :
            (number >= 10) ? "0" + number :
                (number >= 1) ? "00" + number :
                                    "000" + number;
    }
    function tick() {
        var time = new Date();
        document.getElementById("time").textContent = pad2(time.getHours())
            + ":" + pad2(time.getMinutes())
            + ":" + pad2(time.getSeconds())
            + "." + pad4(time.getMilliseconds());
        window.requestAnimationFrame(tick);
    }

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();
})();