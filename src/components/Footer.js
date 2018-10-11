import React from 'react';
import logobottom from '../images/logo_bottom.png';

class FooterSocialNetworks extends React.Component {
    render() {
        return (
            <section class="footer-social">
                <p>SHOP24 в социальных сетях:</p>
                <a className="social-btn social-btn-vk" href="#">Вконтакте</a>
                <a className="social-btn social-btn-fb" href="#">Фейсбук</a>
                <a className="social-btn social-btn-odnokl" href="#">Одноклассники</a>
                <a className="social-btn social-btn-prin" href="#">Пинтерест</a>
                <a className="social-btn social-btn-hrt" href="#">Сердечко</a>
                <a className="social-btn social-btn-inst" href="#">Инстаграм</a>
                <a className="social-btn social-btn-ytb" href="#">Ютуб</a>
            </section>
        )
    }
};
class FooterCopyright extends React.Component {
    render() {
        return (
            <section class="copyright">
                <p>Copyright © Товар ООО «Стиль и Мода», 2014-2016. Все права защищены.При использовании материалов сайта ссылка на www.shop24.com обязательна. 115193, Москва, ул. Кожуховская 5-я, д. 9, помещение VII <br/> Телефон  8 800 500-75-55</p>
            </section>
        )
    }
};

class FooterMain extends React.Component {
    render() {
        return (
            <section class="footer-main">
                <div className="footer-block footer-block--contacts">
                    <img className="footer-logo" alt="footer-logo" src={logobottom} width="100px" height="56px"/>
                    <div className="contact-block">
                        <p className="phone-number">8 (800) 500-75-55*</p>
                        <p className="phone-number-descr">*Бесплатный звонок по России</p>
                        <p className ="phone-number">8 (495) 733-96-03</p>
                    </div>
                </div>    
                    <div className="footer-block">
                        <ul className="footer-block-list">
                            <h4 className="footer-block__title">Каталог товаров</h4>
                            <li><a href='/'>Одежда и аксессуары</a></li>
                            <li><a href='/'>Обувь</a></li>
                            <li><a href='/'>Украшения</a></li>
                            <li><a href='/'>Красота и здоровье</a></li>
                            <li><a href='/'>Товары для дома</a></li>
                            <li><a href='/'>Товары для кухни</a></li>
                        </ul>
                    </div>      
                    <div className="footer-block">
                        <ul className="footer-block-list">
                            <h4 className="footer-block__title">Заказ</h4>
                            <li><a href='/'>Оплата и доставка</a></li>
                            <li><a href='/'>Возврат</a></li>
                            <li><a href='/'>Помощь</a></li>
                            <li><a href='/'>Благотворительный фонд Константина Хабенского</a></li>
                            <li><a href='/'>Гарантия на дополнительное облуживание товара</a></li>
                            <li><a href='/'>Пользовательское соглашение</a></li>
                        </ul>
                    </div>      
                    <div className="footer-block">
                        <ul className="footer-block-list">
                            <h4 className="footer-block__title">Shop24</h4>
                            <li><a href='/'>Смотреть прямой эфир</a></li>
                            <li><a href='/'>Расписание передач</a></li>
                            <li><a href='/'>Акции</a></li>
                            <li><a href='/'>Личный кабинет</a></li>
                            <li><a href='/'>Поиск и карта сайта</a></li>
                            <li><a href='/'>Карта брендов</a></li>
                            <li><a href='/'>Обратная связь</a></li>
                        </ul>
                    </div>      
                    <div className="footer-block">
                        <ul className="footer-block-list">
                            <h4 className="footer-block__title">Информация</h4>
                            <li><a href='/'>О канале</a></li>
                            <li><a href='/'>Сотрудничество</a></li>
                            <li><a href='/'>Покупайте с нами</a></li>
                            <li><a href='/'>Контакты</a></li>
                        </ul>
                    </div>      
            </section>
        )
    }
};

export default class Footer extends React.Component {
    render() {
        return (
            <footer className = 'footer'>
                <div className = 'footer__content'>
                    <FooterSocialNetworks/>
                    <FooterMain/>
                    <FooterCopyright/>
                </div>
            </footer>
        );
    }
}
