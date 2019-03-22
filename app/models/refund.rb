class Refund < ApplicationRecord
    def to_param
        refund_code
    end
end
