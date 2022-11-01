import { Typography } from '@mui/material';

function MenuBottomItem({ src, alt, text }) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '80px',
                justifyContent: 'center',
                cursor: 'pointer'
            }}
        >
            <img style={{ width: 40, paddingBottom: '6px' }} src={src} alt={alt}></img>
            <Typography sx={{ fontWeight: 700, fontSize: '12px', lineHeight: '11px' }}>{text}</Typography>
        </div>
    );
}

export default MenuBottomItem;
