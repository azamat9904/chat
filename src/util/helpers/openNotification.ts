import { notification } from 'antd';
import { NotificationInstance } from 'antd/lib/notification';

export default (title: string, description: string, duration: number, type: string = "info") => {
    notification[type as keyof NotificationInstance]({
        message: title,
        description: description,
        duration: duration
    });
};