<?php

use JohnHearfield\Auth\Google\Listener;
use Illuminate\Contracts\Events\Dispatcher;

return function (Dispatcher $events) {
    $events->subscribe(Listener\AddClientAssets::class);
    $events->subscribe(Listener\AddGoogleAuthRoute::class);
};
