<template>
    <div v-if="statusbadge" class="status" :class="format">
        <slot></slot>
        <div class="statusbutton">
            <div class="optbtn" @click="setStatus('done')">Done</div>
            <div class="optbtn" @click="setStatus('pending')">Pending</div>
            <div class="optbtn" @click="setStatus('processing')">Processing</div>
        </div>
    </div>
    <div v-else class="topic" :class="format">
        <slot></slot>
    </div>
    
</template>

<script>
export default {
    props: {
        format: {
            type: String,
            required: true,
            default: "other"
        },
        statusbadge: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    methods: {
        setStatus(status) {
            this.$emit("set-status", status);
        }
    }

}
</script>

<style scoped>
.statusbutton {
    /* display: flex;
    justify-content: space-around; */
    height: 0px;
    overflow: hidden;
}

.status:hover .statusbutton {
    height: 5rem;
}

.optbtn {
    font-size: 1.2rem;
    padding: 0 1rem;
}

.optbtn:hover {
    background-color: rgba(34, 34, 34, 0.456);
}


.topic {
    padding: 0.5rem 1rem;
    border-radius: 15px;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
    cursor: default;
    transition: 0.2s all ease-in-out;
}

.status {
    padding: 0.5rem 1rem;
    border-radius: 15px;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
    cursor: default;
    transition: 0.2s all ease-in-out;
}

.payment {
    background-color: rgb(255, 200, 106);
    color: #444;
}

.trial {
    background-color: rgb(255, 166, 166);
    color: #444;
}

.schedule {
    background-color: rgb(141, 171, 255);
    color: #444;
}

.format:hover {
    box-shadow: 0 0 6px 3px rgb(152, 152, 152);
}

.other {
    background-color: rgb(134, 255, 196);
    color: #444;
}



.done {
    background-color: rgb(0, 197, 0);
    color: #ddd;
}

.pending {
    background-color: rgb(152, 33, 0);
    color: #ddd;
}

.processing {
    background-color: rgb(181, 181, 0);
    color: #ddd;
}
</style>