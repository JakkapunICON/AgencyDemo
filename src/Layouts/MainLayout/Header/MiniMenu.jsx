import React, { useState } from 'react';
import { HEADER_MENU } from '../../../data/header-menu';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { MoreHoriz as MoreHorizIcon } from '@mui/icons-material';

// const ITEM_HEIGHT = 48;

export default function MiniMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div
        // style={{ display: 'none' }}
        >
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreHorizIcon sx={{ fontSize: '30px' }} />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button'
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: 48 * 4.5,
                        width: '20ch'
                    }
                }}
            >
                {HEADER_MENU.map((item) => (
                    <MenuItem key={item.id} onClick={handleClose}>
                        {item.title}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
