import { isEditingProp } from "@/defaultProps";
import { pick } from "lodash-es";
import { computed } from "vue";
function useComponentCommon(props: any, picks: string[]) {
  const styleProps = computed(() => {
    return pick(props, picks);
  });

  const handleClick = () => {
    if (props.actionType === "url" && props.url && !isEditingProp) {
      window.location.href = props.url as string;
    }
  };

  return {
    styleProps,
    handleClick,
  };
}

export default useComponentCommon;
