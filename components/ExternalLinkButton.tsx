import React, { FC, PropsWithChildren } from 'react';

const ExternalLinkButton: FC<PropsWithChildren<{ url: string }>> = ({ url, children }) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            {children}
        </a>
    );
};

export default ExternalLinkButton;