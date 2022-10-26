import { ButtonGroup, Button, Typography } from '@mui/material';

export default function Language() {
    return (
        <ButtonGroup variant="text" aria-label="text button group">
            <Button>
                <Typography variant="buttonGroup" color="secondary" sx={{ fontWeight: 700 }}>
                    TH
                </Typography>
            </Button>
            <Button>
                <Typography variant="buttonGroup">EN</Typography>
            </Button>
            <Button>
                <Typography variant="buttonGroup">CH</Typography>
            </Button>
        </ButtonGroup>
    );
}
