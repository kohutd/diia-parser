import ASTNode from "./ASTNode.js";

class LambdaNode extends ASTNode {
    /**
     * @param context
     * @param {DiiaParameterNode[]} parameters
     * @param {ASTNode} expression
     */
    constructor(context, { parameters, expression }) {
        super(context);

        this.parameters = parameters || [];
        this.expression = expression;
    }
}

export default LambdaNode;
