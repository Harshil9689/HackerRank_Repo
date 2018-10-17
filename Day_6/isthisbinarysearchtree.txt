public static ArrayList<Integer> inOrder(Node root,ArrayList<Integer> arr) {
        Node temp=root;
        if(temp.left!=null)
            arr=inOrder(temp.left,arr);
        arr.add(temp.data);
        if(temp.right!=null)
            arr=inOrder(temp.right,arr);
        return(arr);
    }
    public static boolean isSorted(ArrayList<Integer> array) {
    boolean result = true;
    for(int i = 0; i <array.size()-1; i++) {
 
        if(array.get(i) >= array.get(i+1)) {
            result = false;
            break;
        }
    }
    return result;
    }
    boolean checkBST(Node root) {
       
        Node temp=root;
        boolean status=true;
         ArrayList<Integer> arr = new ArrayList<Integer>();
        arr=inOrder(root,arr);
        if(!isSorted(arr))
            status=false;
        
        return status;
    }