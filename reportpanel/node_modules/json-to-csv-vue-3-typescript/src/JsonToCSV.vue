<script lang="ts" setup>
import mapKeys from "lodash.mapkeys";
import pickBy from "lodash.pickby";
import pick from "lodash.pick";
import {saveAs} from "file-saver";
import {unparse} from "papaparse";
import {computed} from "vue";

const isType = (value: any, type: string) => typeof value === type;

type Props = {
  // props
  data: any;
  fields: any;
  name: string;
  delimiter: string;
  separatorExcel: boolean;
  encoding: string;
  advancedOptions: any;
  labels: any;
  testing: boolean;
  id: string;
  buttonName: string;
};

const props = withDefaults(
    defineProps<Props>()
    , {
      // default props
      data: [],
      fields: undefined,
      name: "export.csv",
      delimiter: ",",
      separatorExcel: false,
      encoding: "utf-8",
      advancedOptions: {},
      labels: undefined,
      testing: false,
      id: "button",
      buttonName: "button",
    });
const emit = defineEmits(["export-started", "export-finished"]);

const idName = "export_" + new Date().getTime();

const labelsFunctionGenerator = () => {
  let labels = props.labels;

  if (
      !isType(labels, "undefined") &&
      !isType(labels, "function") &&
      !isType(labels, "object")
  ) {
    throw new Error("Labels needs to be a function(value, key) or object.");
  }

  if (isType(labels, "function")) {
    return (item) => {
      let _mapKeys = mapKeys(item, labels);
      return _mapKeys;
    };
  }

  if (isType(labels, "object")) {
    return (item) => {
      return mapKeys(item, (item, key) => {
        return labels[key] || key;
      });
    };
  }

  return (item) => item;
};

const fieldsFunctionGenerator = () => {
  let fields = props.fields;

  if (
      !isType(fields, "undefined") &&
      !isType(fields, "function") &&
      !isType(fields, "object") &&
      !Array.isArray(fields)
  ) {
    throw new Error("Fields needs to be a function(value, key) or array.");
  }

  if (
      isType(fields, "function") ||
      (isType(fields, "object") && !Array.isArray(fields))
  ) {
    return (item) => {
      return pickBy(item, fields);
    };
  }

  if (Array.isArray(fields)) {
    return (item) => {
      return pick(item, fields);
    };
  }
  return (item) => item;
};

const cleaningData = () => {
  if (isType(props.fields, "undefined") && isType(props.labels, "undefined")) {
    return props.data;
  }

  const labels = labelsFunctionGenerator();
  const fields = fieldsFunctionGenerator();

  return props.data.map((item) => labels(fields(item)));
};

const exportableData = computed(() => {
  const filteredData = cleaningData();
  if (!filteredData.length) {
    return null;
  }

  return filteredData;
});

const generate = () => {
  emit("export-started");
  const dataExport = exportableData.value;

  if (!dataExport) {
    console.error("No data to export");
    return;
  }

  let csv = unparse(
      dataExport,
      Object.assign(
          {
            delimiter: props.delimiter,
            encoding: props.encoding,
          },
          props.advancedOptions
      )
  );
  if (props.separatorExcel) {
    csv = "SEP=" + props.delimiter + "\r\n" + csv;
  }
  // Add BOM when UTF-8
  if (props.encoding === "utf-8") {
    csv = "\ufeff" + csv;
  }
  emit("export-finished");
  if (!props.testing) {
    let blob = new Blob([csv], {
      type: "text/csv;charset=" + props.encoding,
    });
    saveAs(blob, props.name);
  }
};
</script>

<template>
  <div
      :id="id"
      @click="generate"
  >
    <slot>
      <!-- default slot -->
      {{ buttonName }}
    </slot>
  </div>
</template>


<style lang="scss" scoped>

</style>