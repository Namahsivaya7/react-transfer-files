// import { Box, Grid, Paper, Checkbox, FormControlLabel } from "@mui/material";
// import * as React from "react";
// import IconButton from "@mui/material/IconButton";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import FormGroup from "@mui/material/FormGroup";


// const Data = ["siva", "ganesh", "tulasi", "durga"];

// export default class TrasferList extends React.Component {
//     constructor() {
//         super();
//         this.state = { left: Data, selected: [], right: [] };
//     }
//     handleCheckboxClick = (itemName) => {
//         const selectedItems = this.state.selected;
//         if (selectedItems.includes(itemName)) {
//             const index = selectedItems.findIndex((name) => name === itemName);
//             selectedItems.splice(index, 1);
//         } else {
//             selectedItems.push(itemName);
//         }
//         this.setState({ selected: selectedItems });
//     };
//     handleRight = () => {
//         // const selectedItems = this.state.selected;
//         const rightitems = this.state.right.concat(this.state.selected);
//         this.setState({ right: rightitems, selected: [] });
//     };
//     render() {
//         return (
//             <Box>
//                 <Grid container>
//                     <Grid item xs={5}>
//                         <FormGroup>
//                             {
//                                 this.state.left.map((name) => (
//                                     <FormControlLabel control={<Checkbox onClick={() => this.handleCheckboxClick(name)} checked={this.state.selected.includes(name)} />} label={name} />
//                                 ))};
//                         </FormGroup>
//                     </Grid>


//                     <Grid item xs={2}>
//                         <Grid container>
//                             <Grid item>

//                                 <ArrowForwardIosIcon onClick={this.handleRight} />

//                             </Grid>
//                         </Grid>
//                         <Grid container>
//                             <Grid item>

//                                 <ArrowBackIosIcon />

//                             </Grid>
//                         </Grid>


//                     </Grid>


//                     <Grid item xs={5}>
//                         <FormGroup>
//                             {
//                                 this.state.right.map((name) => (
//                                     <FormControlLabel control={<Checkbox onClick={() => this.handleCheckboxClick(name)} checked={this.state.selected.includes(name)} />} label={name} />
//                                 ))};
//                         </FormGroup>

//                     </Grid>
//                 </Grid>
//             </Box>
//         );
//     }
// }



import React from "react";
// import App from "./App";
import { Box, FormGroup, Grid, Paper } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { DisplaySettings } from "@mui/icons-material";

const DATA = ["Tulasi", "Durga", "Shiva", "Ganesh"];

export default class Transferfiles2 extends React.Component {
    constructor() {
        super();
        this.state = { left: DATA, selected: [], right: [] };
    }
    handlerCheckbox = (itemName) => {
        const selectedItems = this.state.selected;
        if (selectedItems.includes(itemName)) {
            const index = selectedItems.findIndex((name) => name === itemName);
            selectedItems.splice(index, 1);
        } else {
            selectedItems.push(itemName);
        }
        this.setState({ selected: selectedItems });
    };
    handleRight = () => {
        const selectedItems = this.state.selected;
        const rightitems = this.state.right.concat(this.state.selected);
        const leftitems = this.state.left;
        const filtereditems = leftitems.filter(
            (item) => !selectedItems.includes(item)
        );

        this.setState({ right: rightitems, selected: [], left: filtereditems });
    };
    handleLeft = () => {
        const selectedItems = this.state.selected;
        const leftitems = this.state.left.concat(this.state.selected);
        const rightitems = this.state.right;
        const filtereditems = rightitems.filter(
            (item) => !selectedItems.includes(item)
        );

        this.setState({ left: leftitems, selected: [], right: filtereditems });
    };
    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <Box>
                        <FormGroup>
                            {this.state.left.map((name) => (
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            onClick={() => this.handlerCheckbox(name)}
                                            checked={this.state.selected.includes(name)}
                                        />
                                    }
                                    label={name}
                                />
                            ))}
                        </FormGroup>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Box>
                        <IconButton
                            aria-label="ArrowForwardIosIcon"
                            onClick={this.handleRight}
                        >
                            <ArrowForwardIosIcon />
                        </IconButton>
                        <IconButton aria-label="ArrowBackIosIcon" onClick={this.handleLeft}>
                            <ArrowBackIosIcon />
                        </IconButton>
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <Box>
                        <FormGroup>
                            {this.state.right.map((name) => (
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label={name}
                                    onClick={() => this.handlerCheckbox(name)}
                                    checked={this.state.selected.includes(name)}
                                />
                            ))}
                        </FormGroup>
                    </Box>
                </Grid>
            </Grid>
        );
    }
}