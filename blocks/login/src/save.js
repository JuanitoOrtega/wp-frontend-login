import { RichText } from '@wordpress/block-editor';

const Save = (props) => {
    const { className, attributes } = props;
    const { title, emailLabel, passLabel, text } = attributes;
    return (
        <div className={className}>
            <div className="signin__container">
                <RichText.Content
                    tagName="h1"
                    className="signin__titulo"
                    value={title}
                />
                {text &&
                    <RichText.Content
                        tagName="p"
                        value={text}
                    />
                }
                <form className="signin__form" id="signin">
                <div className="signin__email name--campo">
                    <label htmlFor="email">{emailLabel}</label>
                    <input name="email" type="email" id="email" />
                </div>
                <div className="signin__pass name--campo">
                    <label htmlFor="password">{passLabel}</label>
                    <input name="password" type="password" id="password" />
                </div>
                <div className="signin__submit">
                    <input type="submit" value="Log In" />
                </div>
                <div className="msg" />
                </form>
            </div>
        </div>
    );
}

export default Save;