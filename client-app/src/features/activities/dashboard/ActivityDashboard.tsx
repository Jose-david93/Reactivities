import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityDetails from "../details/ActivityDetail";
import ActivityForm from "../form/ActiviryForm";
import ActivityList from "./ActivityList";

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id:string) => void;
}

export default function ActivityDashboard({activities,selectActivity,selectedActivity,cancelSelectActivity, editMode, openForm, closeForm, createOrEdit, deleteActivity}: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList deleteActivity={deleteActivity} activities={activities} selectActivity={selectActivity} />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                <ActivityDetails activity={selectedActivity} cancelSelectActivity= {cancelSelectActivity} openForm={openForm}/>}
                {editMode &&
                <ActivityForm createOrEdit={createOrEdit} closeForm={closeForm} activity={selectedActivity} />}
            </Grid.Column>
        </Grid>
    )
}