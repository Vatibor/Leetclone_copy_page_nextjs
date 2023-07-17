import {twoSum} from "@/utils/problems/two-sum";
import {reverseLinkedList} from "@/utils/problems/reverse-linked-list";
import {jumpGame} from "@/utils/problems/jump-game";
import {search2DMatrix} from "@/utils/problems/search-a-2d-matrix";
import {validParentheses} from "@/utils/problems/valid-parentheses";
import {Problem} from "@/utils/types/problem";

interface ProblemMap {
  [key: string]: Problem;
}

export const problems = {
  "two-sum": twoSum,
  "reverse-linked-list": reverseLinkedList,
  "jump-game": jumpGame,
  "search-a-2d-matrix": search2DMatrix,
  "valid-parentheses:": validParentheses
}