class Payment < ApplicationRecord
    def to_param
        order_number
    end
end
