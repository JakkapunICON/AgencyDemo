import { Card, CardContent } from '@mui/material';

import image1 from '../../images/content/image1.png';

function CardTitle() {
    return (
        <Card variant="outlined" sx={{ height: 547.8, borderRadius: 5 }}>
            <CardContent sx={{ padding: 0, height: 547.8 }}>
                <img src={image1} alt="image1" />
            </CardContent>
        </Card>
    );
}

export default CardTitle;
