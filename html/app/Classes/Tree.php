<?php

namespace App\Classes;
class Tree
{
    /**
     * Get three of categories
     *
     * @param  array
     * @return array
     */
    public static function getTree($categories)
    {
        $tree = [];
        foreach ($categories as $id => &$node) {
            if (!$node['parent_id']) {
                $tree[$id] = &$node;
            }
            else {
                $categories[$node['parent_id']]['children'][$node['id']] = &$node;
            }
        }
        return $tree;
    }
}
