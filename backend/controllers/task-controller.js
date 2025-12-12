import taskModel from "../models/task-model.js";

const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;

        if(!title || !description) {
            res.status(404).json({
                msg: "Enter title, descritpion"
            })
        }

        const task = await taskModel.create({
            id: Math.floor(Math.random() * 100) + 1,
            title: title,
            description: description
        });

        res.status(201).json({
            msg: "Task created",
            task: {
                title: title,
                description: description,
                id: task._id
            }
        })
    } catch(err) {
        console.log(`error in create task controller ${err}`);
        return res.status(501).json({
            msg: "Internal server error"
        })
    }
}

const getTask = async (req, res) => {
    try {
        const allTasks = await taskModel.find();
        if(!allTasks || allTasks.length === 0) {
            res.status(404).json({
                msg: "No task found"
            })
        }
        res.json({
            msg: "all tasks fetched successfully",
            tasks: allTasks
        })
    } catch(err) {
        console.log(`error in get task route ${err}`);
        return res.status(501).json({
            msg: "Internal server error"
        })
    }
}


const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedTask = await taskModel.findByIdAndDelete(id);

        if(!deletedTask) {
            res.status(404).json({
                msg: "Task not found"
            })
        }

        res.status(200).json({
            msg: "Task deleted successfully",
            task: deletedTask
        })

    } catch(err) {
        console.log(`error in delete task route ${err}`);
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}

export { createTask, getTask, deleteTask };