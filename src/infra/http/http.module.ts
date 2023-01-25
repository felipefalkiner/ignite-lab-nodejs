import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.modules';

import { SendNotification } from '@application/use-cases/send-notification';
import { NotificationsController } from './controllers/notifications.controller';
import { CancelNotification } from '@application/use-cases/cancel-Notification';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from '@application/use-cases/get-recipient-notifications';
import { ReadNotification } from '@application/use-cases/read-Notification';
import { UnreadNotification } from '@application/use-cases/unread-Notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    ReadNotification,
    UnreadNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
  ],
})
export class HttpModule {}
