import { notification } from 'antd';

export default (title, description, duration, type = "info") => {
    notification[type]({
        message: title,
        description: description,
        duration: duration
    });
};