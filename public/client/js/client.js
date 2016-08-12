var socket = io.connect();

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
(function(){

    // When a user connects with a mobile phone
    socket.emit('connect mobile', { room: roomId}, function(data){
        if(data.registered = true){
            registered = true;
        }else{
            $('#error').append(data.error);
        }
    });

    // Handle room destruction
    socket.on('disconnect', function() {
        alert('Lost connection with room. You are now disconnected.');
        //TODO redirect ./home
    });

    // Prevent device sleep mode
    if(typeof document.keepScreenAwake !== "undefined"){
        document.keepScreenAwake = true;
    }

    // Collect touch information
    var touchpad = document.getElementById('touchpad');
    var mc = new Hammer(touchpad);
    mc.on("pinch rotate panleft panright tap press", function(ev) {
        touchpad.textContent = ev.type +" gesture detected.";
        socket.emit('update touch', ev.type);
        console.log('update touch', ev.type);
        if(ev.type === 'press'){
            if(typeof navigator.vibrate !== null){
                navigator.vibrate(1000);
            }
        }
    });

})();