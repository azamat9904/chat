import React, { useEffect, useState } from 'react';
import { ShadowedBox } from "../../components";
import { withRouter, NavLink } from 'react-router-dom';

import { InfoCircleTwoTone } from "@ant-design/icons";
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/user/actions';
import { Button } from '../../components';

const CheckEmail = (props) => {
    const { location } = props;
    const dispatch = useDispatch();
    const userState = useSelector(state => state.userState);
    const [context, setContext] = useState({
        title: "Подтвердите свой аккаунт",
        text: " На вашу почту отправлено письмо с ссылкой на подтверждение аккаунта"
    });

    useEffect(() => {
        const name = location.search.split('=')[0].substr(1);
        const hash = location.search.split('=')[1];
        if (name === 'hash' && hash)
            dispatch(actions.verifyUser(hash));

        return () => {
            dispatch(actions.verifyUserClear());
        }
    }, []);

    useEffect(() => {
        if (userState.verifyUserSuccess)
            setContext({
                title: "Успех",
                text: "Аккаунт успешно подтвержден. Перейди на сайти чтобы войти и дальше работать с приложением"
            });

        if (userState.verifyUserFailed)
            setContext({
                title: "Ошибка",
                text: "Введенный хеш не действительный, если что то пошло не так обратитесь администратору"
            });

    }, [userState.verifyUserSuccess, userState.verifyUserFailed])

    return (
        <ShadowedBox>
            <div className="success-block">
                <div>
                    <InfoCircleTwoTone style={{ fontSize: "50px" }} />
                </div>
                <h3 className="success-block__title">{context.title}</h3>
                <p className="success-block__content">
                    {context.text}
                </p>
                {
                    userState.verifyUserSuccess && <Button><NavLink to="/login">Войти</NavLink></Button>
                }
            </div>
        </ShadowedBox>
    )
}

export default withRouter(CheckEmail);