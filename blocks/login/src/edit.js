import { useState } from '@wordpress/element';
import { BlockControls, InspectorControls, RichText } from '@wordpress/block-editor';
import { Panel, PanelBody, TextControl } from '@wordpress/components';

const Edit = (props) => {
    const { className, attributes, setAttributes } = props;
    const { title, emailLabel, passLabel, text } = attributes;
    const [hasText, setHasText] = useState(text);
    return (
        <>
            <InspectorControls>
                <Panel>
                    <PanelBody title="Labels" initialOpen={true}>
                        <TextControl
                            label="Email Label"
                            value={emailLabel}
                            onChange={(newLabel) => setAttributes({ emailLabel: newLabel })}
                        />
                        <TextControl
                            label="Password Label"
                            value={passLabel}
                            onChange={(newLabel) => setAttributes({ passLabel: newLabel })}
                        />
                    </PanelBody>
                </Panel>
            </InspectorControls>
            <BlockControls
                controls={[
                    {
                        icon: 'text',
                        title: 'Add text',
                        isActive: text || hasText,
                        onClick: () => setHasText(!hasText)
                    }
                ]}
            />
            <div className={className}>
                <div className="signin__container">
                    <RichText
                        tagName="h1"
                        placeholder="Escribe un título"
                        className="signin__titulo"
                        value={title}
                        onChange={(newTitle) => setAttributes({ title: newTitle })}
                    />
                    {(text || hasText) &&
                        <RichText
                            tagName="p"
                            placeholder="Escribe un párrafo"
                            value={text}
                            onChange={(newText) => setAttributes({ text: newText })}
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
        </>
    );
}

export default Edit;