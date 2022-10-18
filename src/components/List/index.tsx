import React from 'react';
import {Box, ListItem, Typography} from "@mui/material";
interface TodoListProps {
    todo: Todo
    OnCompleted: OnCompleted


}

const List: React.FC<TodoListProps> = ({todo, OnCompleted}) => {
    return (
        <div>
       <ListItem>
         <Box>
            <Typography>

            </Typography>
         </Box>
       </ListItem>

        </div>
    );
};

export default List;