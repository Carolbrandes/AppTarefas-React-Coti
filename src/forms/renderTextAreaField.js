import React from 'react';

export const renderTextAreaField = ({
    label,
    placeholder,
    rows,
    input,
    meta : {
        touched,
        error
    }
}) => (
    <div className="form-group">
        <label className="control-label">{label}</label>
        <textarea className="form-control" placeholder={placeholder} rows={rows} {...input}></textarea>
        {
            touched && (
                error &&
                <span className="text-danger">
                    {error}
                </span>
            )
        }
    </div>
)