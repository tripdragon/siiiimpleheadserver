// Inspired by @devinivy's 'fishbowl' project
// https://github.com/devinivy/fishbowl/blob/69e65cfb1213ef8cdb79bcca2f9be17e70f0f3a2/packages/api/lib/routes/game-join.js

'use strict';

// Upsert user in room
module.exports = {
    method: 'post',
    path: '/rooms/{id}/update',
    options: {
        handler: (request) => {

            const { roomService } = request.services();

            try {
                return {
                    user: roomService.upsertUserInRoom({
                        roomId: request.params.id,
                        userInfo: request.payload
                    })
                };
            }
            catch (error) {

                console.log('error', error);

                return {
                    error: error.message
                };
            }
        }
    }
};
