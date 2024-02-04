import dns from "dns";

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' www.googletagmanager.com pagead2.googlesyndication.com www.google-analytics.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: www.google-analytics.com  // Add Google Analytics image source
        media1.tenor.com
        cdn.myanimelist.net
        i2.wp.com
        s4.anilist.co
        img.scdns.io
        m.media-amazon.com
        www.faselhd.link
        sm.ign.com
        faselhd.link
	    w.tuktokcinema.com
        static.wikia.nocookie.net;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
    frame-src *;
`

const nextConfig = {
    images: {
        domains: ['media1.tenor.com', 'www.faselhd.link', 'faselhd.link', 'img.scdns.io', 'w.tuktokcinema.com', 'i2.wp.com', 'cdn.myanimelist.net','static.wikia.nocookie.net', 'm.media-amazon.com'],
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: cspHeader.replace(/\n/g, ''),
                    },
                ],
            },
        ]
    },
};

dns.setDefaultResultOrder("ipv4first")
export default nextConfig;

