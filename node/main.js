/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const webPush = require('web-push');

const pushSubscription = YOUR_SUBSCRIPTION_OBJECT;

const vapidPublicKey = 'BNwRIH4Jp9fCox-Hv2-3BRnJYAXE0D2YYBDxtynIYpoXPtiC6plNry15ldpokonVSXKyc7Z5OD61AwYtNDWQwqY';
const vapidPrivateKey = 'RmxVxjfYgR8HwMTVEJqhZxN0WV2xh-H0rJ-QhimsAsY';

const payload = 'Here is a payload!';

const options = {
  // gcmAPIKey: 'AAAApOUfcUc:APA91bFYCIqx8eMeVSvfPFYC_6Wa1JZD0CxDaLgIChvaLfNTjS99SREucx1vad-D6RGOSwVrb7O3daJpnIyvFLy3cC_Uaa9wbSx07JjGKcwO9xNT5GGslJHTzV5sgeBxq3BRrcbKg5JB
',
  TTL: 60,
  vapidDetails: {
    subject: 'mailto:diego.racero@gmail.com',
    publicKey: vapidPublicKey,
    privateKey: vapidPrivateKey
  }
};

webPush.sendNotification(
  pushSubscription,
  payload,
  options
);
